/**
 * Adds `nodeRequire` global variable into the JS bundle so that the runtime
 * can add the prerendered result string after Parcel's module transformation.
 */
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const DIST_PATH = './dist'

const jsBundlePath = path.join(
  __dirname,
  'dist',
  fs.readdirSync(DIST_PATH).find(filename => filename.endsWith('js'))
)

fs.writeFileSync(
  jsBundlePath,
  `nodeRequire=typeof require!=="undefined"&&require;${fs.readFileSync(
    jsBundlePath,
    'utf8'
  )}`
)

exec(`node ${jsBundlePath}`)
