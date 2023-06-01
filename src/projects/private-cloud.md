---
title: Private cloud
abstract: Running apps on my self-hosted cloud.
icon: ☁️
tags: docker, docker swarm, cloud, GitHub actions
---

I've been working with Docker for a few years now, and I love it. The only thing is, I've only used it in development environments until now. So, that's when the idea arose to use it to deploy my side projects. It's taken a lot of research and work, but you're now reading content that is served from a Docker container running in a swarm. All that work just to serve static HTML files. Talk about over engineered. 😂

But all jokes aside, my intention with this project is far more than just serving static files, of course. I have a few other projects that previously ran on Heroku, Vercel or in standalone containers on a single server. And I wanted them to run in this infrastructure too.

## Features

The infrastructure currently includes a private Docker registry to use when deploying applications. Applications that are available on the public web are connected to Traefik, a reverse proxy, which also handles TLS termination.

Applications are automatically deployed using GitHub actions. To prevent accidentally leaking any secrets in public repositories, I decided to put most configuration of side projects in a private repository along with the rest of the infrastructure. That way, I can configure anything I host from a single place.

There is a lot more to this project of course, but because this is a custom built infrastructure, I can't share anything too specific at the moment.

## Conclusion

If you have any questions, remarks or just want to say hi, feel free to reach out to me on [Mastodon](https://indieweb.social/@jasper).

## Related articles

- [Check for file changes in GitHub actions](/blog/check-for-file-changes-in-github-actions/)