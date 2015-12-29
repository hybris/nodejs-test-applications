# Node.js Test Applications

A collection of applications used for testing the Node.js buildpack

## Applications

| Name | Description
| ---- | -----------
| `simple-nodejs-application` | A simple Node.js application

### Output Content

All applications support the following REST operations:

| URI | Description
| --- | -----------
| `GET /` | The health of the application

## Building

Before building the project, the following tools must be installed:

* [Node.js](https://nodejs.org/en/download/)

To build the project, navigate to the app directory and run the following:

```
npm install
```

## Deploying to Cloud Foundry

Each test application contains a `manifest.yml` file which allows the built application to be deployed to Cloud Foundry by simply issuing:

```
cf push
```
