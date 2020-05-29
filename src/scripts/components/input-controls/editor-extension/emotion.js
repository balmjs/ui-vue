import {
  emojiClassName,
  isValidEmoji,
  getCode,
  createEmoji,
  replaceElementToString
} from './emoji-utils';

const emojiRegExp = /(:\w+:)|(\[\w+\])/g;

let emojiTypes = [];
let emojiData = {};
let emojiMap = {};

class Emotion {
  constructor(emotions) {
    for (let i = 0, len = emotions.length; i < len; i++) {
      const emotion = emotions[i];

      emojiTypes.push({
        type: emotion.type,
        name: emotion.title
      });

      if (emotion.content.every((item) => isValidEmoji(emotion.type, item))) {
        let emojiList = [];

        [].slice.call(emotion.content).forEach((item) => {
          const emoji = Object.assign({ type: emotion.type }, item);
          const code = getCode(emoji);

          emojiList.push(emoji);

          emojiMap[code] = emoji;
        });

        emojiData[emotion.type] = emojiList;
      } else {
        console.warn('Invalid emotions format');
        // reset
        emojiTypes = [];
        emojiData = {};
        emojiMap = {};
        break;
      }
    }

    // console.log('emojiTypes', emojiTypes);
    // console.log('emojiData', emojiData);
    // console.log('emojiMap', emojiMap);
  }

  static getTypes() {
    return emojiTypes;
  }

  static getEmotion(type) {
    return emojiData[type];
  }

  static getEmotions() {
    return emojiMap;
  }

  static clear() {
    emojiTypes = [];
    emojiData = {};
    emojiMap = {};
  }

  static encode(html) {
    const documentEl = new DOMParser().parseFromString(html, 'text/html');
    documentEl.querySelectorAll(`.${emojiClassName}`).forEach((el) => {
      const emojiKeys = el.classList[1] ? el.classList[1].split('-') : [];
      if (emojiKeys.length === 3) {
        const type = emojiKeys[1];
        const name = emojiKeys[2];
        const code = getCode({ type, name });
        replaceElementToString(el, code);
      }
    });

    let content = documentEl.querySelector('body').innerHTML;

    return content;
  }

  static decode(content) {
    let html = content;

    const result = content.match(emojiRegExp);
    if (result) {
      result.forEach((code) => {
        const emojiEl = createEmoji(emojiMap[code]);
        html = html.replace(code, emojiEl.outerHTML);
      });
    }

    return html;
  }
}

export default Emotion;
