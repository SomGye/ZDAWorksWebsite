# ZDAWorks Website
------
### Description
- The front-end code for the ***ZDAWorks Website***: a central hub for the abstract media projects by the <u>ZDA Works</u> company run by *ZeroDayAnubis*.
  - This hub will act as the central point for all projects done by ZDA Works, such as abstract art, logos, music, etc.
### Technology
- This website leverages the following frameworks/libraries/tools:
  - *Node.js*: for launching the website on the backend
  - *React.js*: for modular components and local state, used as the framework to enable a quick and easy Single-Page Application
  - *Vite.js*: for tooling and compiling/building/bundling the JS/CSS/JSX and assets
  - *Vercel*: for generous free web hosting
  - *Tailwind CSS*: for inline CSS building and enabling light and modular components
### Setup/Maintenance
- Fork and Clone the repo at https://github.com/SomGye/ZDAWorksWebsite
  - This uses Vite.js with TypeScript and ESLint enabled. Use `npm start` to run a live dev build, or `npm run build` to compile a production build.
- Updating Routes: 
  - Routes are essentially objects in the BrowserRouter array in the `main.tsx` file. You can add a route by adding another object with a `path` and a <App> element with a new `route` string argument. You can update a route by simply updating the `path` and `route` string argument as well. 
  - You will also need to add/update the following:
    - *App.tsx*: add/update IF block in useEffect for `[route]`
------