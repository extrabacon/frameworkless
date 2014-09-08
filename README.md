# Frameworkless

A sample repository for a new Express application, largely inspired from the [Sails](http://sailsjs.org/) web framework. **Frameworkless** builds on the excellent application structure laid out by Sails, without the framework  magic (automatic REST APIs, seamless websockets, etc.). In exchange, you gain full control over your dependencies and your Express application.

The components included in this repository are considered as a starting base for a new project. Everything can be changed and/or removed. Make it your own!

## Instructions for a new project

1. Fork the code
2. Start coding

## Borrowed from Sails

1. Application structure is very similar (assets, config, tasks, views, etc.)
2. Assets are built automatically when starting the application
3. Modules are loaded dynamically with [include-all](https://www.npmjs.org/package/include-all)
4. Logging with [captains-log](https://www.npmjs.org/package/captains-log)
5. Controllers, policies and responses are [Express](http://expressjs.com/) middleware
6. Globally accessible services (through the "app" global)
7. Extensible build through the "tasks" folder

## Different from Sails

1. No framework: compose your application with Express routers and modules yourself
2. All application logic (controllers, models, routes, etc.) is placed in a "src" folder
3. The "sails" global is replaced by a very similar "app" global
4. [Waterline](https://www.npmjs.org/package/waterline) ORM is replaced by [Mongoose](http://mongoosejs.com/), but can be extended or replaced
5. Based on Express version 4
6. Builds with [Gulp](http://gulpjs.com/) instead of [Grunt](http://gruntjs.com/), with pre-included tasks for a fully functional asset pipeline
7. [Bower](http://bower.io/) is pre-included
8. An empty test structure with [Mocha](http://visionmedia.github.io/mocha) is pre-included

## Missing from Sails

1. Project scaffolding
2. Automatic REST APIs
3. Seamless WebSockets (no websocket support, must add manually)
4. Documentation

