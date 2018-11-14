# Project # 05: Neighborhood Map Project (React)


This is the fifth project of  _**[Udacity Full Stack Web Developer Nanodegree Program](https://classroom.udacity.com/nanodegrees/nd004/)**_  .

### Summary

-   *An app that renders the map of a specified neighborhood and pin few locations with details.*
-   *It is a single page web application created using the famous Javascript library [React JS](https://reactjs.org/).*
-   *Uses [Google Maps API](https://cloud.google.com/maps-platform/) to display the map.*
-  *Uses [React Google Maps](https://tomchentw.github.io/react-google-maps/) package to render the Map & its components .*
-   *Uses [Foursquare API](https://developer.foursquare.com/) to get the data of listed venues.*
-   *Uses [Axios](https://github.com/axios/axios) library to fetch the data from Foursquare*

## Introduction
This project requires students to build a fully front ended web app using [React JS](https://reactjs.org/) - *a Javascipt library* - that displays the map of a neighborhood pins specific locations / venues. The app should:

* *provide a **usable and responsive user interface** for multiple devices.*
* *have the **pinned location / venues with map markers** and should display relevant information of the venue.*
* *should provide the dynamic feature of **filtering these venues** by either a text input search or a dropdown menu.*
*  *should provide a **list-view for the venues' name** and update the list synchronously with the filter.*
* *should fetch the data from the API (foursquare in this case) **asynchronously** and **handle errors** (if any)  without crashing the app.*

*View more information about the project's requirements [here](https://review.udacity.com/#!/rubrics/1351/view).*


### *Find My Coffee*
*I have implemented my solution on the top of [create-react-app](https://github.com/facebook/create-react-app). My solution retrieves, by default, 10 venues from [Foursquare](https://developer.foursquare.com/) using [Axios](https://github.com/axios/axios). These locations are pinned on the map provided by [Google](https://cloud.google.com/maps-platform/). The Google map component is rendered using the [React Google Maps](https://tomchentw.github.io/react-google-maps/). Details of a venue are provided in the infoWindow.*
*A responsive sidebar can be toggled from the hamburger icon in the header. This sidebar provides a list-view of the venues that can be filtered using a search input field. The app is made responsive, accessible and usable as much as possible*

***This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).***

## Contents
Following is the top level structure for the project directory.
*(Explore the default folder structure for create-react-app [here](https://facebook.github.io/create-react-app/docs/folder-structure))*
```
Neighborhood-Map-Project-React
├── node_modules/
├── public/
|		└── favicon.ico
|		└── index.html
|		└── manifest.json
├── src/
|	└── API/
|		└── FourSquare.js
|	└── Components/
|		└── ErrorBoundary/
|		└── Header/
|		└── Map/
|		└── Media/
|		└── SideBar/
|	└── App.css
|	└── App.js
|	└── App.test.js
|	└── index.css
|	└── index.js
|	└── serviceWorker.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
### Description
* `node_modules` - contains all the dependency modules of *create-react-app* installed by default. *(by default)*
* `public` - contains the core HTML file. *(by default)*
* `src` - contains the main *app* component, other sub-components, APIs and  media files (if any). *(discussed below)*
* `README.md` - That's me :')

Since React utilizes the idea of [react components](https://reactjs.org/docs/react-component.html) as the user interface pieces, this app is divided into following main components (in rendering order) which are eventually mounted the DOM elements in the finally rendered app .
```
Neighborhood-Map-Project-React ────────────
├── App
|	└── ErrorBoundary
|	└── Header
|		└── Hamburger
|	└── Main
|		└── SideBar
|			└── SearchBox
|			└── VenueList
|				└── ListItems
|		└── Map
|			└── Marker
|			└── InfoWindow
|		└── Footer
└──────────────────────────────────────────
```
* `App` - highest parent wrapper around all other components.
*  `ErrorBoundary` - wrapper around the sub-components, provides a fallback UI for handling errors that occur within its child components. *([see details](https://reactjs.org/docs/error-boundaries.html))*
* `Header` - contains an animated *hamburger icon* that toggles the SideBar open when clicked, and the title for app.
* `Main` - flex box container of SideBar, Map & Footer.
* `SideBar` - contains the list-view of interactive venue items which can be filtered dynamically using the input search field.
* `Map`- wrapper around the Google Map, markers and infoWindow
* `Footer` - contains attribution for any third-party






## Try by yourself


Download or clone the master branch to your PC.
### Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Miscellaneous

*  ***This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).***
* Venue details including photos are obtained from [Foursquare](https://developer.foursquare.com/).
* All the media (including images, links, videos) used in this website may subject to copyrights of the respective owners.
* These are used for educational purpose only and not for any commercial use.
* This readme file is created by following the guidelines provided on [Udacity Discussion Forum](https://discussions.udacity.com/t/movie-trailer-website-checklist-read-this-before-you-submit-your-project/39852) and using an online markdown [editor](https://stackedit.io/).

### Useful Resources
* [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
* Tutorial - [Built with react](http://buildwithreact.com/tutorial/jsx)
* [The Hamburger Icon](https://github.com/jonsuh/hamburgers)
* [How to update parent's state from child](https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react)
* [This github respository](https://github.com/Jlevett/Neighborhood-Map-React)
* [Deploying to GitHub pages](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)

_(stuck at someplace? found any error? or just want to connect? see below :))_

### Ping me @

**Abdullah A. Salman**

-   [Email](mailto:20abdullahahmadsalman@gmail.com)
-   [Github](https://github.com/abdullah-22)
-   [Linkedin](http://www.linkedin.com/in/abdullahasalman)