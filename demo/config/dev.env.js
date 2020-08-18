'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  infoHosts: '["iji41bdbd42011.swtc.top","ijtic3b44eb75e.swtc.top","ijtid59e8792d5.swtc.top","ijtie5dcf155a0.swtc.top","ije115qd93cabc.swtc.top"]',
  infoPort: '443'
})
