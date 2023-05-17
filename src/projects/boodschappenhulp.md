---
title: Boodschappen­hulp
abstract: An app to help with grocery shopping.
image: /assets/images/boodschappenhulp-logo.svg
imageAlt: Boodchappenhulp logo
tags: app, node, typescript, monorepo, nestjs, angular, ionic
draft: true
---

<img src="{{ image }}" class="bg-teal p-1 m-1 rounded-lg float-right">

As with some of my other projects, I want to make my life easier by automating tasks. In this case, I found myself constantly checking which stores had the products I was looking for but for a better price. So, I started a new project called Boodschappenhulp (Shopping help): A simple to use (web)app on which you can easily search through products of multiple stores at the same time.

## Features

- **Private:** Users do not have to create an account to make use of most functionality. All data is saved locally until a user decides to create an account or login to an existing account.
- **Search:** Products are updated daily and merged into one big database. After that, the product database is indexed so that users can search through 30,000 products in a few milliseconds using meilisearch.
- **Lists:** Create shopping lists for every occasion. For example, you can create a list for all the food and drinks for Christmas.
- **Notifications:** Be notified if your favorite type of – for example – peanut butter is on sale.

## Technical challenges

Merging data from different sources is something I hadn't done before. One thing I remembered from college, though, was that if you have unstructured data you could use something like a NoSQL database. It's something I wanted to use for some time and this would be the perfect project for it.

Because I decided to use Angular and NestJS and both use Typescript, it was only logical to apply a monorepo strategy. After briefly looking at monorepo tools, I settled on Nx. Mainly because it integrates neatly with both Angular and NestJS.

## Conclusion

This project is still a work in progress, but you can already try out the beta over at [boodschappenhulp.jlinden.nl](https://boodschappenhulp.jlinden.nl). If you have any questions, remarks or just want to say hi, feel free to reach out to me on [Mastodon](https://indieweb.social/@jasper).