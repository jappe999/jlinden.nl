---
title: Projects
layout: page.njk
eleventyExcludeFromCollections: true
---


<div class="min-h-screen max-w-3xl mt-96 mx-auto mb-4">
  <header class="scroll-resize mb-4 mx-4">
    <h1 class="w-full mb-2 text-4xl md:text-5xl font-mono text-white drop-shadow-bold break-word">{{ title }}</h1>
    <h2 class="text-black">{{ abstract }}</h2>
  </header>

  <ul class="w-full flex flex-wrap justify-between">
    {% for project in collections.projects %}
    <li class="bg-white rounded my-4 mx-4 shadow-bold w-full overflow-hidden border-2 border-black">
        <a href="{{ project.url }}" class="flex">
        <div class="w-24 flex">
            <img src="{{ project.data.image }}" alt="" class="object-cover bg-teal">
        </div>
        <div class="p-2">
            <h3 class="text-2xl font-mono">{{ project.data.title }}</h3>
            <p class="text-black">{{ project.data.abstract }}</p>
        </div>
        </a>
    </li>
    {% endfor %}
  </ul>
</div>