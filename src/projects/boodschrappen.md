---
title: Boodschrappen
abstract: An app to help with grocery shopping.
icon: 🛒
tags: app, node, typescript, monorepo, nestjs, angular, ionic
---

<img src="/assets/images/boodschappenhulp-logo.svg" class="bg-teal p-1 m-1 rounded-lg float-right">

As with some of my other projects, I want to make my life easier by automating tasks. In this case, I found myself constantly checking which stores had the products I was looking for but for a better price. So, I started a new project called Boodschrappen: A simple to use (web)app on which you can easily search through products of multiple stores at the same time.

## Features

- **Private:** Users do not have to create an account to make use of most functionality. All data is saved locally until a user decides to create an account or login to an existing account.
- **Search:** Products are updated daily and merged into one big database. After that, the product database is indexed so that users can search through 30,000 products in a few milliseconds using meilisearch.
- **Shopping list:** Create a list with products you can buy in each store. Products are automatically assigned to the store that sells it the cheapest.

## Technical challenges

Merging data from different sources is something I hadn't done before. One thing I remembered from college, though, was that if you have unstructured data you could use something like a NoSQL database. It's something I wanted to use for some time and this would be the perfect project for it.

Because I decided to use Angular and NestJS and both use Typescript, it was only logical to apply a monorepo strategy. After briefly looking at monorepo tools, I settled on Nx. Mainly because it integrates neatly with both Angular and NestJS.

## About the name

Thinking up names for applications is something I find very difficult to do. I started with the name "Market discount" and then "Boodschappenhulp" (shopping aid). The name Boodschappenhulp didn't have the right tone. People thought it would be an app in which users could ask for help with grocery shopping.

The name "Boodschrappen" was devised by my brother and sister-in-law. The slogan they came up with, is "Shrap de kosten, niet de boodschappen". That loosely translates to "Reduce cost, not groceries". I'm lucky to have such creative people in the family.

## Conclusion

This project is still a work in progress, but you can already try out the beta over at [boodschrappen.nl](https://boodschrappen.nl). If you have any questions, remarks or just want to say hi, feel free to reach out to me on [Mastodon](https://indieweb.social/@jasper).