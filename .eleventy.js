const yaml = require('js-yaml');
const markdownItAnchor = require("markdown-it-anchor");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = (config) => {
  config.setServerOptions({ port: 81 });
  config.addPassthroughCopy({
    'src/assets': 'assets',
  })

  config.addDataExtension('yml', (contents) => yaml.load(contents));
  
	config.addPlugin(pluginRss);
	config.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	config.addPlugin(EleventyHtmlBasePlugin);
	config.addPlugin(pluginBundle);

  // Get the first `n` elements of a collection.
	config.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	config.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return all the tags used in a collection
	config.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	config.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
	});

	// Customize Markdown library settings:
	config.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1,2,3,4],
			slugify: config.getFilter("slugify")
		});
	});

  return {
    dir: {
			input: 'content',
			output: '../_site',
			includes: '../src/_includes',
			// layouts: '../src/_layouts',
			data: '../src/_data',
			assets: '../assets',
    }
  }
}
