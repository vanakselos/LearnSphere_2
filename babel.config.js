module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-transform-export-namespace-from',
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-transform-react-jsx', {
        runtime: 'automatic'
      }]
    ],
  };
};
