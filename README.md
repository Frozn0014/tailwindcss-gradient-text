# tailwindcss-gradient-text

Simplifies the creation of gradient text using [Tailwind CSS](https://tailwindcss.com).

Yes, this is already possible using multiple classes, but this plugin simplifies it into one class.

## Installation

```
npm install tailwindcss-gradient-text
```

Inside your `tailwind.config.js` file, require the plugin inside the plugins option

```js
module.exports = {
  plugins: [require('tailwindcss-gradient-text')]
};
```

---

## Usage

You can apply a gradient to some text by using the utility class `text-gradient-to-{direction}`.

```html
<h1 class="text-gradient-to-r from-blue-500 via-green-300 to-red-500 font-extrabold text-3xl"></h1>
```

<img src="https://i.ibb.co/ZdrnV8q/image.png" width=256>

---

## Radial Gradients

You can use radial (circular) gradients using the utility class `text-gradient-radial`.

```html
<h1 class="text-gradient-radial from-blue-500 to-red-500 font-extrabold text-3xl"></h1>
```

<img src="https://i.ibb.co/r0JcV6L/image.png" width=256>

---

## Custom Colors

This plugin uses Tailwind's [gradient color stops](https://tailwindcss.com/docs/gradient-color-stops), which include all default colors and colors defined in your `tailwind.config.js` file.

Example:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        myColor: '#5cb6f7',
        myOtherColor: '#c4ff8a'
      }
    }
  }
};
```

In this case, to create gradient text using your custom colors, you would use:

```html
<h1 class="text-gradient-to-{direction} from-myColor to-myOtherColor">Text</h1>
```

More information on custom colors [here](https://tailwindcss.com/docs/gradient-color-stops#customizing-your-theme).

---

## Tips

- [Using a middle (third) color](https://tailwindcss.com/docs/gradient-color-stops#middle-color)
- [Modifying Tailwind's gradient color stops](https://tailwindcss.com/docs/gradient-color-stops#specifying-stop-positions)
