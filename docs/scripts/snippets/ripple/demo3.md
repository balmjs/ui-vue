```html
<div
  v-ripple="1"
  v-shadow="1"
  :class="['demo-surface', $theme.getThemeClass('primary')]"
>
  Primary
</div>
<div
  v-ripple="2"
  v-shadow="2"
  :class="['demo-surface', $theme.getThemeClass('secondary')]"
>
  Secondary
</div>
```

```html
<div
  v-ripple:cssOnly="1"
  v-shadow="2"
  :class="['demo-surface', $theme.getThemeClass('primary')]"
>
  Primary
</div>
<div
  v-ripple:cssOnly="2"
  v-shadow="2"
  :class="['demo-surface', $theme.getThemeClass('secondary')]"
>
  Secondary
</div>
```
