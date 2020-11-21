# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Node Sass problems

Node Sass = Pain in the \*ss.

### Instructions

You can watch individual files or directories with the --watch flag.
The watch flag tells Sass to watch your source files for changes.
And re-compile CSS each time you save your Sass.
If you wanted to watch (instead of manually build) your `input.scss` file,
you'd just add the watch flag to your command, like so:

```bash
# syntax:sass --watch src/assets/scss/argon-design-system/:src/assets/css/argon-design-system/
# sass --watch input.scss output.css

sass --watch src/assets/scss/argon-design-system/nav.scss src/assets/css/argon-design-system/nav.css
```

You can watch and output to directories by using folder paths as your input and output, and separating them with a colon.
In this example:

```bash
sass --watch app/sass:public/stylesheets
sass --watch src/assets/scss/argon-design-system/:src/assets/css/argon-design-system/
```

## Absolute Imports Enabled

rootdir set by using: `jsconfig.json`
`rootdir`: `src`
`sample`: `src/assets/scss/argon-design-system/input-group.scss`

You can configure your application to support importing modules using absolute paths. This can be done by configuring a jsconfig.json or tsconfig.json file in the root of your project. If you're using TypeScript in your project, you will already have a tsconfig.json file.

Below is an example `jsconfig.json` file for a JavaScript project. You can create the file if it doesn't already exist:
https://create-react-app.dev/docs/importing-a-component/#absolute-imports

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

If you're using TypeScript, you can configure the baseUrl setting inside the compilerOptions of your project's tsconfig.json file.

Now that you've configured your project to support absolute imports, if you want to import a module located at src/components/Button.js, you can import the module like so:

import Button from 'components/Button';
For more information on these configuration files, see the jsconfig.json reference and tsconfig.json reference documentation.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
