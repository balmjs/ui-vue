```scss
@use 'balm-ui/components/icon' with (
  $font-path: '../fonts',
  $with-subdir: 0,

  $sizes: 18 24 36 48,
  $dark: rgba(0, 0, 0, 0.54),
  $dark-inactive: rgba(0, 0, 0, 0.26),
  $light: rgba(255, 255, 255, 1),
  $light-inactive: rgba(255, 255, 255, 0.3),

  $success: #0f9d58,
  $info: #4285f4,
  $warning: #f4b400,
  $error: #db4437
);
```
