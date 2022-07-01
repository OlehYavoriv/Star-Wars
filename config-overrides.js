const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@assets": "src/assets",
    "@components": "src/components",
    "@ui": "src/components/Ui-Kit",
    "@constants": "src/constants",
    "@containers": "src/containers",
    "@hoc": "src/hoc",
    "@services": "src/services",
    "@styles": "src/styles",
    "@utils": "src/utils",
    "@routes": "src/routes",
    "@hooks": "src/hooks",
  })(config);
  return config;
};
