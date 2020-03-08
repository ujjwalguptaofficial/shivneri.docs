import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _74a1b411 = () => interopDefault(import('../code/pages/about-ujjwal.vue' /* webpackChunkName: "pages/about-ujjwal" */))
const _e678bbd6 = () => interopDefault(import('../code/pages/community.vue' /* webpackChunkName: "pages/community" */))
const _7fbbe0c5 = () => interopDefault(import('../code/pages/help.vue' /* webpackChunkName: "pages/help" */))
const _df1a8c74 = () => interopDefault(import('../code/pages/sponsor.vue' /* webpackChunkName: "pages/sponsor" */))
const _4b5a65e1 = () => interopDefault(import('../code/pages/team.vue' /* webpackChunkName: "pages/team" */))
const _2fbd3f16 = () => interopDefault(import('../code/pages/tutorial/authentication.vue' /* webpackChunkName: "pages/tutorial/authentication" */))
const _9dc3c642 = () => interopDefault(import('../code/pages/tutorial/body.vue' /* webpackChunkName: "pages/tutorial/body" */))
const _84a9f0fe = () => interopDefault(import('../code/pages/tutorial/bootstrap.vue' /* webpackChunkName: "pages/tutorial/bootstrap" */))
const _c0c406da = () => interopDefault(import('../code/pages/tutorial/components.vue' /* webpackChunkName: "pages/tutorial/components" */))
const _808fabce = () => interopDefault(import('../code/pages/tutorial/controller.vue' /* webpackChunkName: "pages/tutorial/controller" */))
const _67f0313e = () => interopDefault(import('../code/pages/tutorial/cookie.vue' /* webpackChunkName: "pages/tutorial/cookie" */))
const _f463f634 = () => interopDefault(import('../code/pages/tutorial/custom-error-handler.vue' /* webpackChunkName: "pages/tutorial/custom-error-handler" */))
const _9376e232 = () => interopDefault(import('../code/pages/tutorial/data.vue' /* webpackChunkName: "pages/tutorial/data" */))
const _a83d125e = () => interopDefault(import('../code/pages/tutorial/decorator/index.vue' /* webpackChunkName: "pages/tutorial/decorator/index" */))
const _616db492 = () => interopDefault(import('../code/pages/tutorial/dependency-injection.vue' /* webpackChunkName: "pages/tutorial/dependency-injection" */))
const _a8da767c = () => interopDefault(import('../code/pages/tutorial/deployment.vue' /* webpackChunkName: "pages/tutorial/deployment" */))
const _1fca5bb9 = () => interopDefault(import('../code/pages/tutorial/file.vue' /* webpackChunkName: "pages/tutorial/file" */))
const _cc520cac = () => interopDefault(import('../code/pages/tutorial/format-response.vue' /* webpackChunkName: "pages/tutorial/format-response" */))
const _9ca1d546 = () => interopDefault(import('../code/pages/tutorial/get-started.vue' /* webpackChunkName: "pages/tutorial/get-started" */))
const _982e4b88 = () => interopDefault(import('../code/pages/tutorial/graphql.vue' /* webpackChunkName: "pages/tutorial/graphql" */))
const _49de5c8d = () => interopDefault(import('../code/pages/tutorial/logger.vue' /* webpackChunkName: "pages/tutorial/logger" */))
const _21ef750f = () => interopDefault(import('../code/pages/tutorial/middleware.vue' /* webpackChunkName: "pages/tutorial/middleware" */))
const _c1e5c0c0 = () => interopDefault(import('../code/pages/tutorial/param.vue' /* webpackChunkName: "pages/tutorial/param" */))
const _8238eb4a = () => interopDefault(import('../code/pages/tutorial/query.vue' /* webpackChunkName: "pages/tutorial/query" */))
const _34947b5c = () => interopDefault(import('../code/pages/tutorial/route.vue' /* webpackChunkName: "pages/tutorial/route" */))
const _1cf28a69 = () => interopDefault(import('../code/pages/tutorial/session.vue' /* webpackChunkName: "pages/tutorial/session" */))
const _1b77e005 = () => interopDefault(import('../code/pages/tutorial/session-provider.vue' /* webpackChunkName: "pages/tutorial/session-provider" */))
const _9a44845a = () => interopDefault(import('../code/pages/tutorial/socket-io.vue' /* webpackChunkName: "pages/tutorial/socket-io" */))
const _1fa8d420 = () => interopDefault(import('../code/pages/tutorial/swagger/index.vue' /* webpackChunkName: "pages/tutorial/swagger/index" */))
const _54de5f12 = () => interopDefault(import('../code/pages/tutorial/test/index.vue' /* webpackChunkName: "pages/tutorial/test/index" */))
const _269f77ba = () => interopDefault(import('../code/pages/tutorial/type/index.vue' /* webpackChunkName: "pages/tutorial/type/index" */))
const _3c395876 = () => interopDefault(import('../code/pages/tutorial/validation.vue' /* webpackChunkName: "pages/tutorial/validation" */))
const _da2e373c = () => interopDefault(import('../code/pages/tutorial/view.vue' /* webpackChunkName: "pages/tutorial/view" */))
const _dfad8286 = () => interopDefault(import('../code/pages/tutorial/view-engine.vue' /* webpackChunkName: "pages/tutorial/view-engine" */))
const _134c137b = () => interopDefault(import('../code/pages/tutorial/worker.vue' /* webpackChunkName: "pages/tutorial/worker" */))
const _4c3ba566 = () => interopDefault(import('../code/pages/tutorial/component/guard.vue' /* webpackChunkName: "pages/tutorial/component/guard" */))
const _71efc810 = () => interopDefault(import('../code/pages/tutorial/component/shield.vue' /* webpackChunkName: "pages/tutorial/component/shield" */))
const _479aa799 = () => interopDefault(import('../code/pages/tutorial/component/wall.vue' /* webpackChunkName: "pages/tutorial/component/wall" */))
const _7b7a3d56 = () => interopDefault(import('../code/pages/tutorial/decorator/expect-body.vue' /* webpackChunkName: "pages/tutorial/decorator/expect-body" */))
const _5b5156b6 = () => interopDefault(import('../code/pages/tutorial/decorator/expect-query.vue' /* webpackChunkName: "pages/tutorial/decorator/expect-query" */))
const _2480bb3b = () => interopDefault(import('../code/pages/tutorial/swagger/initiate.vue' /* webpackChunkName: "pages/tutorial/swagger/initiate" */))
const _501aba12 = () => interopDefault(import('../code/pages/tutorial/swagger/model.vue' /* webpackChunkName: "pages/tutorial/swagger/model" */))
const _7b384d17 = () => interopDefault(import('../code/pages/tutorial/test/e2e-test.vue' /* webpackChunkName: "pages/tutorial/test/e2e-test" */))
const _0bd6bb00 = () => interopDefault(import('../code/pages/tutorial/test/initialize.vue' /* webpackChunkName: "pages/tutorial/test/initialize" */))
const _6b8bb60a = () => interopDefault(import('../code/pages/tutorial/test/unit-test.vue' /* webpackChunkName: "pages/tutorial/test/unit-test" */))
const _7af47869 = () => interopDefault(import('../code/pages/tutorial/type/app-option.vue' /* webpackChunkName: "pages/tutorial/type/app-option" */))
const _2fcd6b14 = () => interopDefault(import('../code/pages/tutorial/type/http-format-result.vue' /* webpackChunkName: "pages/tutorial/type/http-format-result" */))
const _c32f36dc = () => interopDefault(import('../code/pages/tutorial/type/http-request.vue' /* webpackChunkName: "pages/tutorial/type/http-request" */))
const _395efcce = () => interopDefault(import('../code/pages/tutorial/type/http-response.vue' /* webpackChunkName: "pages/tutorial/type/http-response" */))
const _8091082c = () => interopDefault(import('../code/pages/tutorial/type/http-result.vue' /* webpackChunkName: "pages/tutorial/type/http-result" */))
const _3d4739f5 = () => interopDefault(import('../code/pages/tutorial/type/view-engine-data.vue' /* webpackChunkName: "pages/tutorial/type/view-engine-data" */))
const _062baf04 = () => interopDefault(import('../code/pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about-ujjwal",
      component: _74a1b411,
      name: "about-ujjwal"
    }, {
      path: "/community",
      component: _e678bbd6,
      name: "community"
    }, {
      path: "/help",
      component: _7fbbe0c5,
      name: "help"
    }, {
      path: "/sponsor",
      component: _df1a8c74,
      name: "sponsor"
    }, {
      path: "/team",
      component: _4b5a65e1,
      name: "team"
    }, {
      path: "/tutorial/authentication",
      component: _2fbd3f16,
      name: "tutorial-authentication"
    }, {
      path: "/tutorial/body",
      component: _9dc3c642,
      name: "tutorial-body"
    }, {
      path: "/tutorial/bootstrap",
      component: _84a9f0fe,
      name: "tutorial-bootstrap"
    }, {
      path: "/tutorial/components",
      component: _c0c406da,
      name: "tutorial-components"
    }, {
      path: "/tutorial/controller",
      component: _808fabce,
      name: "tutorial-controller"
    }, {
      path: "/tutorial/cookie",
      component: _67f0313e,
      name: "tutorial-cookie"
    }, {
      path: "/tutorial/custom-error-handler",
      component: _f463f634,
      name: "tutorial-custom-error-handler"
    }, {
      path: "/tutorial/data",
      component: _9376e232,
      name: "tutorial-data"
    }, {
      path: "/tutorial/decorator",
      component: _a83d125e,
      name: "tutorial-decorator"
    }, {
      path: "/tutorial/dependency-injection",
      component: _616db492,
      name: "tutorial-dependency-injection"
    }, {
      path: "/tutorial/deployment",
      component: _a8da767c,
      name: "tutorial-deployment"
    }, {
      path: "/tutorial/file",
      component: _1fca5bb9,
      name: "tutorial-file"
    }, {
      path: "/tutorial/format-response",
      component: _cc520cac,
      name: "tutorial-format-response"
    }, {
      path: "/tutorial/get-started",
      component: _9ca1d546,
      name: "tutorial-get-started"
    }, {
      path: "/tutorial/graphql",
      component: _982e4b88,
      name: "tutorial-graphql"
    }, {
      path: "/tutorial/logger",
      component: _49de5c8d,
      name: "tutorial-logger"
    }, {
      path: "/tutorial/middleware",
      component: _21ef750f,
      name: "tutorial-middleware"
    }, {
      path: "/tutorial/param",
      component: _c1e5c0c0,
      name: "tutorial-param"
    }, {
      path: "/tutorial/query",
      component: _8238eb4a,
      name: "tutorial-query"
    }, {
      path: "/tutorial/route",
      component: _34947b5c,
      name: "tutorial-route"
    }, {
      path: "/tutorial/session",
      component: _1cf28a69,
      name: "tutorial-session"
    }, {
      path: "/tutorial/session-provider",
      component: _1b77e005,
      name: "tutorial-session-provider"
    }, {
      path: "/tutorial/socket-io",
      component: _9a44845a,
      name: "tutorial-socket-io"
    }, {
      path: "/tutorial/swagger",
      component: _1fa8d420,
      name: "tutorial-swagger"
    }, {
      path: "/tutorial/test",
      component: _54de5f12,
      name: "tutorial-test"
    }, {
      path: "/tutorial/type",
      component: _269f77ba,
      name: "tutorial-type"
    }, {
      path: "/tutorial/validation",
      component: _3c395876,
      name: "tutorial-validation"
    }, {
      path: "/tutorial/view",
      component: _da2e373c,
      name: "tutorial-view"
    }, {
      path: "/tutorial/view-engine",
      component: _dfad8286,
      name: "tutorial-view-engine"
    }, {
      path: "/tutorial/worker",
      component: _134c137b,
      name: "tutorial-worker"
    }, {
      path: "/tutorial/component/guard",
      component: _4c3ba566,
      name: "tutorial-component-guard"
    }, {
      path: "/tutorial/component/shield",
      component: _71efc810,
      name: "tutorial-component-shield"
    }, {
      path: "/tutorial/component/wall",
      component: _479aa799,
      name: "tutorial-component-wall"
    }, {
      path: "/tutorial/decorator/expect-body",
      component: _7b7a3d56,
      name: "tutorial-decorator-expect-body"
    }, {
      path: "/tutorial/decorator/expect-query",
      component: _5b5156b6,
      name: "tutorial-decorator-expect-query"
    }, {
      path: "/tutorial/swagger/initiate",
      component: _2480bb3b,
      name: "tutorial-swagger-initiate"
    }, {
      path: "/tutorial/swagger/model",
      component: _501aba12,
      name: "tutorial-swagger-model"
    }, {
      path: "/tutorial/test/e2e-test",
      component: _7b384d17,
      name: "tutorial-test-e2e-test"
    }, {
      path: "/tutorial/test/initialize",
      component: _0bd6bb00,
      name: "tutorial-test-initialize"
    }, {
      path: "/tutorial/test/unit-test",
      component: _6b8bb60a,
      name: "tutorial-test-unit-test"
    }, {
      path: "/tutorial/type/app-option",
      component: _7af47869,
      name: "tutorial-type-app-option"
    }, {
      path: "/tutorial/type/http-format-result",
      component: _2fcd6b14,
      name: "tutorial-type-http-format-result"
    }, {
      path: "/tutorial/type/http-request",
      component: _c32f36dc,
      name: "tutorial-type-http-request"
    }, {
      path: "/tutorial/type/http-response",
      component: _395efcce,
      name: "tutorial-type-http-response"
    }, {
      path: "/tutorial/type/http-result",
      component: _8091082c,
      name: "tutorial-type-http-result"
    }, {
      path: "/tutorial/type/view-engine-data",
      component: _3d4739f5,
      name: "tutorial-type-view-engine-data"
    }, {
      path: "/",
      component: _062baf04,
      name: "index"
    }],

    fallback: false
  })
}
