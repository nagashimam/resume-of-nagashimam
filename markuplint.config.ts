import type { Config } from '@markuplint/ml-config';

const config: Config = {
  extends: ['markuplint:recommended'],
  overrides: {
    './src/index.html': {
      rules: {
        'required-h1': false,
      },
    },
  },
};

export default config;
