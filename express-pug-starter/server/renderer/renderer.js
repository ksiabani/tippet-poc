const path = require('path')
const pug = require('pug')
const log = require('../logger')
const Resolver = require('./resolver')
const data = require('../../../src/data/data');

module.exports = function (viewPath) {
  return locals => new Promise((resolve, reject) => {
    locals = {...locals, data};
    const resolvePug = new Resolver(path.join(process.cwd(), viewPath))
    return resolvePug().then(resolvedPath => {
      try {
        log.debug(` --> Rendering template "${viewPath}"`)
        return resolve(pug.renderFile(resolvedPath, locals))
      } catch (err) {
        log.error(` --> Error rendering template "${viewPath}"`, err)
        return reject(err)
      }
    }).catch(err => {
      log.error(` --> Error resolving template "${viewPath}"`, err)
      return reject(err)
    })
  })
}
