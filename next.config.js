const withTM = require('next-transpile-modules')(['react-draft-wysiwyg']);

module.exports = withTM({
  reactStrictMode: true,
 
  eslint: {
    ignoreDuringBuilds: true,
  },
  
});

