const yaml = require('js-yaml');
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = (config) => {
  config.setServerOptions({ port: 81 });
  config.addPassthroughCopy({
    'src/_includes/assets': './assets',
  })

  config.addDataExtension('yml', (contents) => yaml.load(contents));
  
	config.addPlugin(pluginRss);
	config.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	config.addPlugin(EleventyHtmlBasePlugin);
	config.addPlugin(pluginBundle);


  return {
    dir: {
      input: 'src',
      output: 'public',
    }
  }
}
