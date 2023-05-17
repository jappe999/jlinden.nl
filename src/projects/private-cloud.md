---
title: Private cloud
abstract: Running apps on my self-hosted cloud.
tags: docker, infrastructure
draft: true
---

I've been working with Docker for a few years now and I love it. The only thing is, I've only used it in development environments until now. So, that's when the idea arose to use it to deploy my side projects. It's taken a lot of research and work, but you're now reading content that is served from a Docker container running in a swarm. All that work just to serve static HTML files. Talk about over engineered. 😂

But all jokes aside, my intention with this project is far more than just serving static files of course. I have a few other projects that previously ran on Heroku or in standalone containers on a single server. And I wanted them to run in this infrastructure too. To prevent leaking any secrets in public repositories, I decided to put most configuration of side projects in a private repository along with the rest of the infrastructure. That way everything I host can be configured from a single place.

## Features

What I had in mind for the infrastructure was:
- Private registry
- Automatic SSL termination with Traefik
- Automated builds and deployments

## Related articles

- [Check for file changes in GitHub actions](/blog/check-for-file-changes-in-github-actions)