
<h1 align="center">
Typescript Library Template
</h1>

<p align="center">
A small template repo for a typescript library that also has an inlcuded demo app that consumes from the library. Webpack is used to bundle, build and serve.
</p>

<hr>

## Running the demo app

Firstly you need to install the dependencies using the following command (in both library and library demo directories):

```bash
npm install
```

You can build and watch changes to the library using the following command in the library directory:

```bash
npm run build:watch
```

Link the library to the demo app using the following command in the library demo directory:

```bash
npm run link:library
```

You can serve the demo app and watch for changes using the following command in the library demo directory:

```bash
npm run serve:
```

to build and output the demo app dist/ use the following command in the library demo directory:

```bash
npm run build
```

Tests have been setup using web test runner, you can run the tests using the following command in the library directory:

```bash
npm run test
```
