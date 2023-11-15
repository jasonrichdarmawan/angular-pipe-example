`import { multiply } from '../shared/pipes/multiply/multiply';` is ok.

    when `app2` and `app4` import it, webpack will compile it to `common.js`

    it is always better to use pipe instead of function in HTML.

    pipe will cache the result, so it will not call the function again whenever the HTML re-render, if the pipe parameter do not change.

    so, if you want to make a function available in HTML:
    1. do not create a new variable like in `app2`.
    2. use pipe like in `app3`.

    if you only use the function in the component, then you do not need pipe.

# AngularServiceExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
