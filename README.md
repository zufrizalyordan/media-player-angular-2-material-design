# Angular 2 with Material Design Skeleton/Template

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Notes
if you have any issues in mac, like what i had:

```ERROR in ./~/css-loader?sourcemap!./~/postcss-loader!./~/sass-loader?sourcemap!./src/assets/custom-theme.scss
Module build failed: Error: ENOENT: no such file or directory, scandir '/Users/YOUR-USERNAME/YOUR-PATH-URL/media-player/node_modules/node-sass/vendor'```

it means that there isn't any vendor folder for node-sass. to fix it run

```node ./node_modules/node-sass/scripts/install.js```