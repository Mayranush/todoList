const merge = require("webpack-merge");

const dev = require("./dev");
const prod = require("./prod");
const common = require("./common");

let config;
let lifeCycle = process.env.npm_lifecycle_event || process.env.NODE_ENV;

console.log(`Start lifecycle=${lifeCycle}`);
switch (lifeCycle) {
  case "start":
    config = merge(dev, common);
    break;
  case "build":
    config = merge(common, prod);
    break;

  default:
    config = merge(common, dev);
}

module.exports = config;



