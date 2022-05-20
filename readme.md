# Stencil+Tailwind Boilerplate

This is a boilerplate for building static pages with Stencil web-components powered by Tailwind.

This allows the developer to enjoy the benefits of Tailwind's utility classes on the page, a web-component's markup or its (S)CSS, centralising all defaults in Tailwind's theme configuration.

## Getting started

Make sure you're running **NPM 14**.

To start devving, just run:

```bash
npm run stencil:dev
```

This will start launch a browser with live reload running a "Hello world". Now make your magic.

## Benefits / where to start

You can find examples of Tailwind in action on these files:
- `src/pages/index.html`
- `src/components/my-component/my-component.tsx`
- `src/components/my-component/my-component.scss`

So basically you can use Tailwind in your static pages, inside a component's markup and the component's SCSS.

## How it works

Basically, Tailwind is configured to watch over HTML and TSX files. Two commands produce build the css on `build-tailwind` and `www/css/tailwind` (Stencil's output directory). The first makes it available to copy by Stencil's boot up process, and the second updates it directly in Stencil's build directory so you don't have to refresh/restart all the time.

## Theme

The theme's JSON is found in `src/tailwind/theme.json`. It is configured to extend the default template, so if you want a real clean slate, change that in `tailwind.config.js`.

## Known issues

- In some situations you still have to refresh the page to see changes.
- When you make changes to the theme, you have to restart Stencil.