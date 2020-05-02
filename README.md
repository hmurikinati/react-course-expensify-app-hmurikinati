This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


_________________________________________________
Custom by Harish while learning course
_____________________________

ReactsJS course
_________________

yarn global add live-server is command to create live server 
If the above doesnt work tr with below code
npm install -g live-server
live-server -v // to check liversever installed
to run html file redirect main folder and run this command live-server public(foldername of html)
https://babeljs.io/ // fantastic tool it is javascript compiler 
to instal babeljs
npm install -g babel-cli@6.24.1
babel --help // to cross check if babel installed

install yarn init

yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

run the react 
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

yarn install to install nodemodules

undefined, null, boolean ignored by jsx

Reactsjs Docs : https://reactjs.org/docs/dom-elements.html

Reacts dom events : https://reactjs.org/docs/events.html


Props                              VS              State
1. An Object                                    1. An object
2. Can be used when rendering                   2. Can be used when rendering
3. changes (from above) cause re-renders         3. changes cause re-rnders
4. comes from above                              4. defined in component itself
5. cant be changed by component itself           5. can be changed by component itself


debug react : chrome react devtools search this on chrome and install

React articles : https://programmingwithmosh.com/javascript/react-lifecycle-methods/


Uninstall yarn globally : yarn global remove babel-cli live-server
OR
npm uninstall -g babel-cli live-server

Instal Yarn locally 

yarn add live-server babel-cli@6.24.1

Install webpack : 

yarn add webpack@3.1.0

Weback docs : https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax

install react and react dom 

yarn add react react-dom
Install babel 

yarn add babel-core@6.25.0 babel-loader@7.1.1
https://webpack.js.org/concepts/modules/   -- webpack modules

Install DevServer 
yarn add webpack-dev-server@2.5.1

yarn run dev-server


Babel package to use new classSyntax

yarn add babel-plugin-transform-class-properties@6.24.1

Install react Modal
yarn add react-modal  Doc : https://github.com/reactjs/react-modal

Install style loader 
yarn add style-loader css-loader


Install SAAS loader to convert scss in to css just like babel loader
yarn add sass-loader node-sass

Statless function components doesnt have access to life cycle methods


Install normalize css
yarn add normalize.css


React Router 
https://reacttraining.com/react-router/

Install react router/
yarn add react-router-dom

Redux docs : https://redux.js.org/
install reux : yarn add redux

Instal UUId to generate universal unique id
yarn add uuid

Install babe spread operator

yarn add babel-plugin-transform-object-rest-spread

Install React Redux 
yarn add react-redux

Date picker docs
1. https://airbnb.io/react-dates/?path=/story/sdp-input-props--default
2. https://momentjs.com/docs/

yarn add moment react-dates react-addons-shallow-compare 
install react-dates

instal jestjs ; yarn add jest
yarn test -- --watch to run test case automatically

Babel jest working example : https://github.com/kevinsimper/babel-jest-example

yarn add react-test-renderer

yarn add enzyme enzyme-adapter-react-16 raf
Docs for enzyme : https://airbnb.io/enzyme/
yarn add enzyme-to-json


_________________________________________


Deploying app to Production
_________________________________________
1. git init - run this on command from root folder
2. git status
3. create .gitignore on root of the folder to ingore files to cmmmit in git repository
4. git add . to commit all changes
5. git commit -m "Initial commit"
6. git log to view latest commts
7. ligin to github.com and create new repository or branch
8. run this command in git bash to know ssh is available inmachine :  ls -a ~/.ssh
9. connecting to github with ssh keys : https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh
10. eval "$(ssh-agent -s)"
11. ssh-add ~/.ssh/id_rsa
12. clip < ~/.ssh/id_rsa.pub
13. go to githib , click settings next to user profile : click SSH and GPG keys
14. ssh -T git@github.com to connect to github
15. go to github and go to my repositry and click on ssh and copy url
16. run this on cmd app folder not git bash : git remote add origin git@github.com:hmurikinati/react-course-expensify-app-hmurikinati.git
17. git remote
18. git remote -v
19. git push -u origin master
20 : good example to frontend and backend with express : https://www.youtube.com/watch?v=kJA9rDX7azM
21. check heroku version heroku --version
22. Open git bash
23. enter heroku login
24. Open git bash
25. enter heroku create appname
26. git remote
27. git remote -v
28. Great article to deploy code https://medium.com/@ianposton2/create-react-app-deploy-to-heroku-7c3c03f34382
29. open git bash root folder
30. touch Procfile
31. git push heroku master

