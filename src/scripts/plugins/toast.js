import { createApp } from 'vue';
import { getOptions, createModal } from '../utils/modal';

// Define toast constants
const UI_TOAST = {
  id: 'balmui-toast',
  timeoutMs: {
    MIN: 2000,
    MAX: 3500,
    DEFAULTS: 2000
  }
};

const DEFAULT_OPTIONS = {
  className: '',
  timeoutMs: UI_TOAST.timeoutMs.DEFAULTS,
  message: ''
};

let globalOptions = DEFAULT_OPTIONS;
let toastApp;
let toastAppInstance;
let toastTimer;
let toastElTimer;

const template = `<div :class="className">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label" v-text="options.message"></div>
  </div>
</div>`;

function createToast(options) {
  createModal(UI_TOAST.id);

  toastApp = createApp({
    name: 'BalmUIToast',
    data() {
      return {
        open: false,
        opening: true,
        opened: false,
        options
      };
    },
    computed: {
      className() {
        return [
          'mdc-snackbar',
          'mdc-toast',
          this.options.className,
          {
            'mdc-snackbar--opening': this.opening,
            'mdc-snackbar--open': this.opened
          }
        ];
      }
    },
    watch: {
      open(val) {
        if (val) {
          // animation
          setTimeout(() => {
            this.opened = true;
            setTimeout(() => {
              this.opening = false;
            }, 150);
          }, 150);
        } else {
          // reset
          this.opening = true;
          this.opened = false;
        }
      }
    },
    mounted() {
      this.render(this.options);
    },
    methods: {
      hide() {
        this.open = false;
      },
      show() {
        this.open = true;
        // hide toast
        toastTimer = setTimeout(() => {
          this.hide();
        }, this.options.timeoutMs);
      },
      render(options) {
        if (
          options.timeoutMs <= UI_TOAST.timeoutMs.MAX &&
          options.timeoutMs >= UI_TOAST.timeoutMs.MIN
        ) {
          this.options = options;

          this.show();
        } else {
          throw new Error(
            `[BalmUI toast]: The timeoutMs of the toast must be between ${UI_TOAST.timeoutMs.MIN} and ${UI_TOAST.timeoutMs.MAX}`
          );
        }
      }
    },
    template
  });

  return toastApp;
}

function toast(customOptions = {}) {
  const options = getOptions(globalOptions, customOptions);

  if (toastApp) {
    clearTimeout(toastTimer);
    clearTimeout(toastElTimer);

    toastAppInstance.render(options);
  } else {
    toastAppInstance = createToast(options).mount(`#${UI_TOAST.id}`);
  }
}

const BalmUI_ToastPlugin = {
  install(app, options = {}) {
    globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

    app.config.globalProperties.$toast = toast;
    app.provide('toast', toast);
  }
};

const useToast = () => toast;

export default BalmUI_ToastPlugin;
export { useToast };
