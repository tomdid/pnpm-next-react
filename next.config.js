/* eslint-disable */

module.exports = {
  webpack: (config, { isServer }) => {
    //
    // https://github.com/vercel/next.js/issues/9022
    // 
    // config.resolve.alias['react'] = path.resolve(__dirname, './node_modules', 'react');
    // config.resolve.alias['react-dom'] = path.resolve(__dirname, './node_modules', 'react-dom');
  
   
   

    return config
  },
}
