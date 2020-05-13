# Strapi Angular Blog

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

- app<br>
--- app-routing-module: Contains all the routes used<br>
--- app.api.ts: It's where you configute the API endpoint<BR>
--- blog-header: Show a categories menu<br>
--- blog-footer: Just a simple signature in HTML<br>
--- blog-grid: Showing a grid of posts<br>
--- blog-post: Where one can read a post<br>
--- blog-sidebar: Static, just to compose the interface<br>
--- shared<br>
------ model: It has models for each entity<br>
------ pipes: Contains a pipe to reduce a text to a certain number of characters<br>
------ services: <br><br>
--------- Autenthication: The code completed, although its not used in this example<br>
--------- Generical: It has commented code, which will be used only if you configure 
Strapi to work with logins, recover passwords etc. Is able to collect JWT and use it accross the app.<br>
--------- Category: Some Gets for the Category Entity<br>
--------- Posts: Some Gets for the Post Entity<br>

## Final words

Don't forget to download the other/pair project, the Strapi one.

Eli
