const webpack = require('webpack');
const config = require('../webpack.config.js');

// returns a Compiler instance
webpack(config, function(err, stats) {
  if(err)
    console.log('Could not pre-compile vue\nERR:: ', err, '\nSTATS:: ', stats)
});
