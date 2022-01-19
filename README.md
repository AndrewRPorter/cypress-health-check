[![CircleCI](https://circleci.com/gh/AndrewRPorter/cypress-health-check/tree/main.svg?style=svg)](https://circleci.com/gh/AndrewRPorter/cypress-health-check/tree/main)

# Site health checks

Test site health, ensuring your pages are sending proper response codes.

## Usage

Fork this repository and update the `SITES_TO_TEST` list in `cypress/support/constants.js`.

Verify that your tests pass with:

```
yarn test
```

Once the list is updated you can push the changes to your forked repo and create a CircleCI project. Visit [CircleCI](https://app.circleci.com) to get started.
