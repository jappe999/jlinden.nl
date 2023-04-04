---
title: Notes
layout: page.njk
eleventyExcludeFromCollections: true
---

{% for note in collections.notes %}
<a href="{{ note.url }}">{{ note.data.title }}</a>
{% endfor %}