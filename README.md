# Feature Randomizer for AWS ⚡️ [![GitHub](https://img.shields.io/github/license/bfreiberg/randomizer-for-aws?color=blue)](https://github.com/bfreiberg/randomizer-for-aws/blob/main/LICENSE.md)

Can't decide which AWS Service or feature to try next? Got some AWS credits to burn or you just want to browse features by tags? [Try the Feature Randomizer for AWS!](https://freiberg.dev/randomizer)

<h2 align="center">
  <img src="https://github.com/bfreiberg/randomizer-for-aws/blob/main/examples/example.gif" alt="Feature Randomizer for AWS" width="600px" />
  <br>
</h2>

## Features

⚡️ Fully serverless with CloudFront, Lambda@Edge and S3\
⚡️ S3 access secured via Origin Access Identity\
⚡️ Lambda@Edge URL rewriter

⚡️ One Page Layout built with React\
⚡️ Serverside Rendering with Gatsby\
⚡️ Fully Responsive + Reveal Animations

To view the live website, **[click here](https://freiberg.dev/randomizer)**

Based on [gatsby-simplefolio](https://github/license/cobidev/gatsby-simplefolio) by [Jacobo Martínez](https://github.com/cobidev)

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. For infrastructure details see the `infrastructure` folder.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.\
Also you need to have installed [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/)

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
gatsby-cli@2.8.22 or higher
```

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

---

## How To Use 🔧

From your command line, first clone the repository:

```bash
# Clone this repository
$ git clone https://github.com/bfreiberg/randomizer-for-aws

# Go into the repository
$ cd randomizer-for-aws

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run develop
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn develop
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, go to `http://localhost:8000/` and you will see the website running on a Development Server:

<h2 align="center">
  <img src="https://github.com/bfreiberg/randomizer-for-aws/blob/main/examples/example.png" alt="Randomizer for AWS" width="100%">
</h2>

---

## Instructions:

### Step 1 - STRUCTURE

Go to `/src/data/site-data.js` and fill your information

### Hero Section

You can adjust the main title and call to action here

### Footer Section

You can remove or add as many you social-media icons you want.\
Just put an object with the corresponding values inside the networks `array` or remove it from there.

```javascript
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '', // your twitter url
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '', // your linkedin url
    },
    {
      id: nanoid(),
      name: 'github',
      url: '', // your github url
    },
  ],
};
```

### Step 2 - STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to `src/styles/abstracts/_variables.scss` and only change the values on this classes `$main-color` and `$secondary-color` to your prefered HEX color

```scss
// Default values
$primary-color: #f12711;
$secondary-color: #f5af19;
```

**_Note_**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#Flare)

### Step 3 - DATA

Add or modify the data in `src/data/aws-data.js`. Each link can have an **optional** type. Supported values:

```js
[
  {
    text: '',
    link: '',
    type: 'video', // for links to videos, will be styled with a YouTube play icon
  },
  {
    text: '',
    link: '',
    type: 'code', // for links to code, will be styled with a GitHub icon
  },
];
```

---

## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language
- [UI Gradient](https://uigradients.com/#Flare) - beautiful color gradients

Lighthouse score:

<h2 align="center">
  <img src="https://github.com/bfreiberg/randomizer-for-aws/blob/main/examples/lighthouse.png" alt="Lighthouse Report" width="100%">
</h2>

## Authors

- **Ben Freiberg** - [https://github.com/bfreiberg](https://github.com/bfreiberg)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments 🎁

Based upon [gatsby-simplefolio](https://github.com/cobidev/gatsby-simplefolio) by [Jacobo Martínez](https://github.com/cobidev)

---

Amazon Web Services, AWS, Amazon EC2, AWS Lambda, Amazon S3 and any other AWS Marks are trademarks of Amazon.com, Inc. or its affiliates in the United States and/or other countries.

This project is not affiliated, endorsed or sponsored by AWS.
