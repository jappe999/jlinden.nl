const yaml = require('js-yaml');
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const pluginDrafts = require("./config/plugins/drafts.js");
const pluginImages = require("./config/plugins/images.js");
const pluginMarkdown = require("./config/plugins/markdown.js");

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

  config.addPlugin(pluginDrafts);
  config.addPlugin(pluginImages);
  config.addPlugin(pluginMarkdown);

  return {
    dir: {
      input: 'src',
      output: 'public',
    }
  }
}
