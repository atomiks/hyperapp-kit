import './css/index'
import { h, app } from 'hyperapp'
import { withRender } from '@hyperapp/render/src/browser'
import { isBrowser } from './js/utils'
import state from './js/state'
import actions from './js/actions'
import view from './js/view'

const main = withRender(app)(state, actions, view, isBrowser && document.body)

// Prerender in the runtime executed after Parcel's module transformation
if (!isBrowser) {
  const output = './dist/index.html'
  const tag = '<body>'
  const fs = nodeRequire('fs')
  const html = fs.readFileSync(output, 'utf8')
  fs.writeFileSync(output, html.replace(tag, tag + main))
}
