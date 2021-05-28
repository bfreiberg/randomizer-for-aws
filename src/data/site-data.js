import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Want to experiment? Try the Feature Randomizer for AWS',
  lang: 'en',
  description:
    "Can't decide on an AWS Feature to try next or looking for something new to experiment with? Try the Feature Randomizer for AWS",
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/benfreiberg',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/benfreiberg/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bfreiberg/randomizer-for-aws',
    },
  ],
};
