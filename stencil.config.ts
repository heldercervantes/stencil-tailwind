import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import tailwind from 'stencil-tailwind-plugin';
import tailwindConfig from './tailwind.config';

export const config: Config = {
  namespace: 'stw-boilerplate',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [
        { src: '../build-tailwind', dest: 'css', warn: true },
        { src: 'pages', dest: './', warn: true }
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
    tailwind({
      tailwindConf: tailwindConfig,
      tailwindCssPath: './src/tailwind/input.scss'
    })
  ],
  devServer: {
    reloadStrategy: 'pageReload' // needed for proper live reload
  }
};
