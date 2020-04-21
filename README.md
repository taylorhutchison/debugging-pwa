This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# System Requirements for Course
Before running the project, please make sure you have the following:

- Node.js LTS version which can be found [here](https://nodejs.org/en/download/). The course is upto date using this version at all times.
- Please refer to the help section below to resolve most common questions.

# Help and FAQs

### - Can I use my own IDE to develop the project during the course ?
Yes, feel free to use your own IDE for the course.

### - How do I check my Node version ?
To check your current Node.js version, open your terminal and type the command below to see your current Node.js version.
```sh
node -v
```

### - How do I install Node.js LTS version on my machine ?
If you do not have the Node.js LTS version on your machine, you can download using either of the following:
1. Please go [here](https://nodejs.org/en/download/) and download the LTS version of Node.js installable file for your operating system.

2. Alternatively, you can use Node Version Manager (`nvm`) to install LTS version of Node.js in case
 you do not want to delete the existing Node version on your machine.<br>
 `NVM` allows you to use multiple Node versions on your machine and prevent disrupting other 
 projects you may be running with different `Node` versions.<br>
 
### - How do I use nvm to install Node.js ?
Click on [this link](https://github.com/nvm-sh/nvm) and follow the instructions provided in their README.md file 
to install nvm on your machine depending on your platform.

### - Should I install npm separately ?
No, `npm` comes with `Node.js` 
No matter what approach you use to install Node.js, npm will always come with it.

### - How do I check my npm version ?
Open your terminal and type the command below to get your npm version.
```
npm -v
```

### - What version of npm comes with LTS version of Node.js ?
Click on [this click](https://nodejs.org/en/download/) and the `npm` version should be mentioned under the title _**Downloads**_. 
You must ensure that the npm version and node version should match with what is mentioned on this official page.

### - What is the React version need for this course ?
We are using `react` >=16.13.1 and `react-dom` >= 16.13.1 at all times. All the dependecies needed to run this project will be available in package.json
file. You do not have to worry about finding the peer dependencies to run the project. 
All you need are the 2 following commands to get started as long as you have the right version of Node.

```sh
npm install
npm start
```

Alternatively, if you would like to use `yarn`, you may use the following commands. 
```sh
yarn
yarn start
```

### - Do I need Webpack or Babel to run this project ?
No, You don’t need to install or configure tools. You just need the LTS version of Node.js and the npm version that comes with it. 
They are preconfigured and hidden so that you can focus on the code.

### - Which browser are we using for this course ?
We shall be using the latest version of Chrome as of today. Be sure to install/update Chrome on your computer.

### - How do I open Chrome Browser in Mobile View ?
- To open Chrome in Mobile view mode using Mac, press ```Command+Option+i```

### - How do I run Application In Browser?
To run the app in the development mode,
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
We are using Chrome Developer console in this course.



### - How to view changes on UI after editing code ?
Here are few ways to do so:

1) Run the app in Chrome developer console by using the below URL.
Open [http://localhost:3000](http://localhost:3000) 
The page will reload if you make edits and you will also see any lint errors in the console.

2) You can open the app on your phone Chrome browser by using the IP Address from your console. 
For example after you run `npm start`, you will see the following on your terminal.
```$xslt
You can now view app in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.161.3.10:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Open Chrome on your phone and hit this URL:
[http://192.161.3.10:3000](http://192.161.3.10:3000)

### - How to download ZEIT now ?
You will need to signup on ZEIT using your GitHub account.    
You can sign up for ZEIT [here](https://zeit.co/)
Once the account is created, you will `now` dependency on your machine. To download that use either of the commands below.   

With **yarn**
```sh
yarn global add now
```

With **npm**
```sh
npm i -g now
```

### How to deploy App on ZEIT using `now` CLI?
Follow the steps below to deploy the app.
- Make sure you already have an account on ZEIT and `now` CLI dependency is downloaded. If that is not the case, read the above FAQ to install ZEIT `now` first.
- Login to ZEIT using the command below and follow the instruction on the command line.
  ```sh
  now login
  ```
- After successful login, if the project is deployed for the first time, then use the command below from the root of the project and follow the instructions on the command line.
  ```sh
  now
  ```
- If you have previously deployed the app, then you only need to run the following command from the root of the project and it will give you the production url to access the app on the browser.
  ```sh
  now --prod
  ```



# Module 02 - Project Set up and Code Walkthrough 

```sh
git checkout module_02_project_setup
```
