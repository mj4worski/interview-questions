const rewireReactHotLoader = require('react-app-rewire-hot-loader')

//TODO Use eject from create-react-app and apply hot-loader
// after that remove dependencies:     "react-app-rewire-hot-loader" "react-app-rewired"
module.exports = function override (config, env) {
  config = rewireReactHotLoader(config, env);
  return config
};