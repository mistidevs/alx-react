module.exports = {
  setupFilesAfterEnv: ['./setupTests.js'],  // Point to your setupTests.js file
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Mock CSS files
    '\\.(gif|ttf|eot|svg|jpg|png)$': 'jest-transform-stub',  // Mock image and other asset files
  },
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',  // Transform JavaScript and TypeScript files using Babel
  },
};
