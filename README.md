# StrapiAngularBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Objective

The objective of this project is showing how to connect an Angular Application to Strapi Headless CMS (strapi.io). This repository makes pair with the strapi-angular-blog-backend, where a configured Strapi is available for download and use.

## Use case
Consider that someone needs to use Strapi as CMS for a journal/blog. The project was created for 2 entities only: Category and Posts.

## References
I've used two templates from bootstrap website to create the HTMLs. 
https://getbootstrap.com/docs/4.0/examples/blog/#
https://getbootstrap.com/docs/4.4/examples/album/

## Structure

- app
--- app-routing-module: Contains all the routes used
--- app.api.ts: It's where you configute the API endpoint
--- blog-header: Show a categories menu
--- blog-footer: Just a simple signature in HTML
--- blog-grid: Showing a grid of posts
--- blog-post: Where one can read a post
--- blog-sidebar: Static, just to compose the interface
--- shared
------ model: It has models for each entity
------ pipes: Contains a pipe to reduce a text to a certain number of characters
------ services: 
--------- Autenthication: The code completed, although its not used in this example
--------- Generical: It has commented code, which will be used only if you configure Strapi to work with logins, recover passwords etc. Is able to collect JWT and use it accross the app.
--------- Category: Some Gets for the Category Entity
--------- Posts: Some Gets for the Post Entity

## Final words

Don't forget to download the other/pair project, the Strapi one.

Eli
