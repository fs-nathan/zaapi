const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

const purgeGlob = '/**/!(*.stories|*.spec).{ts,tsx}';

const tailwindConfig = {
  purge: [
    __dirname + purgeGlob,
    ...createGlobPatternsForDependencies('apps/zaapi-desktop', purgeGlob),
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};

module.exports = tailwindConfig;
