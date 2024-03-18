const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

// Retrieve the default configuration
const defaultConfig = getDefaultConfig(__dirname);

// Define additional configuration to merge
const extraConfig = {
  // Custom resolver options
  resolver: {
    // Define additional module resolutions
    extraNodeModules: new Proxy({}, {
      get: (target, name) => {
        // Redirects dependencies referenced from the shared package to local node_modules
        if (target.hasOwnProperty(name)) {
          return target[name];
        }
        return path.join(__dirname, `node_modules/${name}`);
      },
    }),
  },
  // Additional folders to be watched by the Metro bundler
  watchFolders: [
    path.resolve(__dirname, '../shared'), // Adjust this path to where your shared folder is located relative to this config file
    path.resolve(__dirname, '../../node_modules'),
  ],
};

// Merge the default config with your additional configuration
module.exports = mergeConfig(defaultConfig, extraConfig);
