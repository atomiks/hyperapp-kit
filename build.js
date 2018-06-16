const fs = require("fs")
const { exec } = require("child_process")
const DIST_PATH = "./dist"

const jsBundlePath = `${DIST_PATH}/${fs
  .readdirSync(DIST_PATH)
  .find(filename => filename.endsWith("js"))}`

fs.writeFileSync(
  jsBundlePath,
  `__prerenderRequire=typeof require!=="undefined"&&require;${fs.readFileSync(
    jsBundlePath,
    "utf8"
  )}`
)

exec(`node ${jsBundlePath}`)
