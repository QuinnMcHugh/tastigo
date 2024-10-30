# Tastigo

The best happy hour and restaurant deals, all in one place. 

## Getting Started

```
npm install
npm run build
```

## Deployment

todo: write out how to deploy this with GitHub pages


### Tech Stack

- React
- TypeScript
- Vite
- v0 by Vercel for fast generative UI
-Shadcn ()

v0 uses:

-shadcn/ui - component collection (not a library, apparently)
  -TypeScript
  -Radix (component library from WorkOS)
  -Tailwind (css in js)


to-do NEXT

-DONE - generate a deal page
  -copy in new component for deal
-DONE - establish a deals-repo
  -has all the deals hardcoded so far
  -can getDeal(id)
  -this will have to be called from the DealPage component
-DONE - get nav working from main page to individual deal page
  -links to subpages
  -use the deals.json data over the mocked data from v0
  -research this
    -outcome: use react router
  -should the url change? Back button nav?
    -have a deal id route, a main landing page route
    -don't want all the resources to be fetched with each back/forward nav - how did the react-router tutorial handle this?
  -break out each of the views to use a MVC architecture (loader (?) is referenced from react-router, renderer is pure view)
    -research MVC patterns in React apps
    -verdict: Container/Presenter pattern (former is Controller/ViewModel, latter is the View). This isn't really needed until views get large+complex
-DONE - improve the styling of the site
  -consistent header for landing and deal pages
  -more consistent deal page to landing page styling
  -renders well on mobiel and desktop
-consume deals.json data, consider best schema, reformat json and code to match
  -what about monthly deals (SAM art museum free days, first Thursday - somehow account for recurring nature)
  -get these working by day of week - reflect in app
    -put deals under correct days on calendar page
  -parse+interpret the occurrence text in the deal-page
  -show the establishment name with a link for the location field

-add 404 page
-is there a way to get the day accordion to still be open when clicking back to the home page?
-devise a way to read the deals.json into the deals-repo
-fill out more known deals (if any)
-polish functionality of the two pages
  -for long occurrence texts, the icon is shrinking. Maybe also align it with the first line of text in this case
-update readme, instructions on how to run, what app is
-publish static web app on GH pages - with v0 of Seattle knowledge
-update readme - how to publish to GH pages
-figure out how to get on-save formatting working with eslint / prettier (read about these tools - do they have to integrate with vite? Try not for simplicity)
-read some about Vite (read guide/docs/philosophy)
-does hoodmaps make money? Could learn from that crowdsourced model of success

readme from vite setup below



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
