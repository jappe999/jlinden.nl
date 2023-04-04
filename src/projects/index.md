---
title: Projects
layout: page.njk
eleventyExcludeFromCollections: true
---

{% for project in collections.projects %}
<a href="{{ project.url }}">{{ project.data.title }}</a>
{% endfor %}