---
title: Blogs
layout: page.njk
eleventyExcludeFromCollections: true
---

{% for blog in collections.blog %}
<a href="{{ blog.url }}">{{ blog.data.title }}</a>
{% endfor %}