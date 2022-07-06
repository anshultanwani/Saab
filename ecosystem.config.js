module.exports = {
  apps : [{
    name   : "dev",
    script : "./src/index.js",
    args   : "limit",
    env: {
      NODE_ENV: "dev",
      PORT: 3002    
    }
  },{
    name   : "prod",
    script : "./src/index.js",
    args   : "rotate",
    env: {
      NODE_ENV: "prod",
      PORT: 3002    
    }
  },{
    name   : "stag",
    script : "./src/index.js",
    args   : "abc",
    env: {
      NODE_ENV: "stag",
      PORT: 3002    
    }
  }]
}
