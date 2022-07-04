module.exports = {
  apps : [{
    name   : "dev",
    script : "./src/index.js",
    args   : "limit"
  },{
    name   : "prod",
    script : "./src/index.js",
    args   : "rotate"
  },{
    name   : "stag",
    script : "./src/index.js",
    args   : "abc"
  }]
}
