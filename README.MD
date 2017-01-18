# Cart.

## Features.

* Defines a typical set of boilerplate files and directories to dig into coding immediately.
* Uses [VueJS](http://vuejs.org/).
* Uses Babel to transform ES6.
* Uses Gulp to perform various build tasks.
	* Minifies JavaScript.
	* Compiles SASS.
	* Create JavaScript bundles.
* Uses Bower for frontend dependency management.
* Includes some basic CSS rules - specifically resets.
* Bundles vendor and Vue component files.

## Setup.

1. Download the package (easiest with `git clone git@github.com:MartyWallace/FrontendSDK.git ./`).
2. Add your favorite packages to `bower.json`.
3. `npm install` and `bower install`.
4. `gulp`.

## Usage.

### General.

* Your application styles should get added to the `/sass/app/` directory - do not add files to the `/sass/sdk/` directory.
* Your application JavaScript files get added to the `/js/` directory.
* Your bundles should be defined in `sdk.js`.
* Bower components are loaded into `/public/vendor/`.

### Component Authoring.

You can create components for the application (Vue components) using the component bundler.

* Define components in the `components` directory.
* Each component has its own directory, containing one JavaScript file and one SCSS file of the same name as the component.
* Add the components you want to compile into your application to the `components.include` array in the `sdk.js`.
* Each compiled component CSS is wrapped in a `.component--<name>` selector to isolate the CSS you define to that component.
