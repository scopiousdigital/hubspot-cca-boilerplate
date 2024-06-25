# CCA Boilerplate

This is a boilerplate for creating complex CCA's (Custom Coded Actions) for HubSpot. You can view HubSpots documentation on [how to create CCA's](https://developers.hubspot.com/docs/api/workflows/custom-code-actions).

## Getting Started

To get started developing your CCA, all you need to do is fork this repo and start coding. The boilerplate comes with an opinioned structure for organizing your code.

### Directory Structure

```
.
├── src
│   ├── actions
│   │   ├── [action-name].ts
│   │       └──index.ts
│   ├── objects
│   │   └──[object-name].ts
│   └── utils
│       └──[util-name].ts
│
├── package.json
├── rollup.config.js
└── tsconfig.json
```

### How to use

To start developing the code first:

1. Fork this repo
2. Clone your fork
3. Run `npm install`
4. Run `npm run build`

This project uses [Rollup](https://rollupjs.org/) to bundle the code. The entry point for all actions is `src/actions/[action-name]/index.ts`. rollup will automatically bundle all dependencies and make them available to the code, dependcies that HubSpot provides out of the box currently are:

```
"@hubspot/api-client",
"axios",
"async",
"aws-sdk",
"lodash",
"mongoose",
"mysql",
"redis",
"request",
"bluebird",
"random-number-cspring",
"googleapis",
```

These dependecy imports are not resolved by rollup as they are provided by HubSpot.

Each `index.ts` file needs to export a named main function that takes the HubSpot event and callback as arguments. The callback is used to send the response back to HubSpot. Both the event and gthe callback are defined in `src/exeuctionTypes.ts`.

Make sure to define any input and output fields inside the workflow in HubSpot. You can find more information on how to do this in the [HubSpot documentation](https://developers.hubspot.com/docs/api/workflows/custom-code-actions).

### How to test

This project uses [Jest](https://jestjs.io/) for testing. To run the tests, run `npm test`.

For cases where you need to test that interacts with the HubSpot API, you can optionally create a `.env` file in the root of the project and create `index.script.ts` files to test the code using the tsx library that is included in this project.

### How to deploy

To deploy the code, you need to create a new CCA in HubSpot and paste in the contents of `dist/[action-name].js`. Make sure to define any input and output fields inside the workflow in HubSpot and add in your environment variables. The code is automatically bundled when you run `npm run build`. The project also uses terser to minify the code as otherwise pasting the code into the web editor is near impossible in less than 2 business days.

You can find more information on how to do this in the [HubSpot documentation](https://developers.hubspot.com/docs/api/workflows/custom-code-actions).

### How to use this boilerplate (opinionated)

This boilerplate is opinionated in the sense that you understand that once you start developing CCAs locally you will always need to run changes through the build process rather than working directly with the web editor. This is a no brainer in cases where you need to bundle external dependencies but there are some cases where this boilerplate comes in handy when there isn't a need to bundle dependencies.

The main benefit of this boilerplate is that not only can we can typescript, but we can also create a CI pipeline that will automatically run tests and build the code when changes are pushed to the repo. This is a great way to ensure that the code is always in a working state, specially when we're dealing with business logic.

The other great benefit is reusing common variables such as HubSpots "objectTypeIds" and "associationTypes" across multiple actions. This is a great way to keep things DRY and make it easier to maintain the codebase.

In the future we may also add a way to automatically generate this piece of static data from the HubSpot API when you load up the project but for now its a write as you go approach.
