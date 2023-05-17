const markdownItAnchor = require("markdown-it-anchor");

module.exports = eleventyConfig => {
    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItAnchor, {
            permalink: markdownItAnchor.permalink.ariaHidden({
                placement: "after",
                class: "header-anchor",
                symbol: "#",
                ariaHidden: false,
            }),
            level: [2, 3, 4],
            slugify: eleventyConfig.getFilter("slugify")
        });

        // Remember old renderer, if overridden, or proxy to default renderer
        const defaultRender = mdLib.renderer.rules.link_open || function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

        mdLib.renderer.rules.link_open = function (tokens, idx, options, env, self) {
            const hrefIndex = tokens[idx].attrIndex('href');

            // Check if href starts with http:// or https://
            if (hrefIndex >= 0 && tokens[idx].attrs[hrefIndex][1].match(/^https?:\/\//i)) {
                // If you are sure other plugins can't add `target` - drop check below
                const aIndex = tokens[idx].attrIndex('target');

                if (aIndex < 0) {
                    tokens[idx].attrPush(['target', '_blank']); // add new attribute
                } else {
                    tokens[idx].attrs[aIndex][1] = '_blank';    // replace value of existing attr
                }
            }

            // pass token to default renderer.
            return defaultRender(tokens, idx, options, env, self);
        };
    });
};