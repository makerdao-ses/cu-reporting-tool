const presets = [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
        '@babel/preset-react', 
        {
            runtime: 'automatic'
        }
    ],
  ];
  
  module.exports = { presets };
