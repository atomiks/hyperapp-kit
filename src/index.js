import "./css/index"
import { h, app } from "hyperapp"
import { withRender } from "@hyperapp/render/src/browser"
import { prerender, isBrowser } from "./js/utils"
import state from "./js/state"
import actions from "./js/actions"
import view from "./js/view"

const containerNode = isBrowser && document.body
const containerTag = "<body>"

const main = withRender(app)(state, actions, view, containerNode)
prerender(main, containerTag)
