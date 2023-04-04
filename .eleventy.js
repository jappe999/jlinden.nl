const yaml = require('js-yaml');

module.exports = (config) => {
  config.setServerOptions({ port: 81 });
  config.addPassthroughCopy({
    'src/_includes/assets': './assets',
  })

  config.addDataExtension('yml', (contents) => yaml.load(contents));

  return {
    dir: {
      input: 'src',
      output: 'public',
    }
  }
}
