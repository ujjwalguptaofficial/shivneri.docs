import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5b6d6aad = () => interopDefault(import('../code/pages/about-ujjwal.vue' /* webpackChunkName: "pages/about-ujjwal" */))
const _b5ae5e0e = () => interopDefault(import('../code/pages/community.vue' /* webpackChunkName: "pages/community" */))
const _2705f361 = () => interopDefault(import('../code/pages/help.vue' /* webpackChunkName: "pages/help" */))
const _355e51aa = () => interopDefault(import('../code/pages/sponsor.vue' /* webpackChunkName: "pages/sponsor" */))
const _1ab70f06 = () => interopDefault(import('../code/pages/team.vue' /* webpackChunkName: "pages/team" */))
const _68ff1f82 = () => interopDefault(import('../code/pages/tutorial/app-option.vue' /* webpackChunkName: "pages/tutorial/app-option" */))
const _6048b059 = () => interopDefault(import('../code/pages/tutorial/authentication.vue' /* webpackChunkName: "pages/tutorial/authentication" */))
const _b86d8c7a = () => interopDefault(import('../code/pages/tutorial/body.vue' /* webpackChunkName: "pages/tutorial/body" */))
const _0aa2591d = () => interopDefault(import('../code/pages/tutorial/bootstrap.vue' /* webpackChunkName: "pages/tutorial/bootstrap" */))
const _1cde4312 = () => interopDefault(import('../code/pages/tutorial/components.vue' /* webpackChunkName: "pages/tutorial/components" */))
const _11ab0bfd = () => interopDefault(import('../code/pages/tutorial/controller.vue' /* webpackChunkName: "pages/tutorial/controller" */))
const _7f414976 = () => interopDefault(import('../code/pages/tutorial/cookie.vue' /* webpackChunkName: "pages/tutorial/cookie" */))
const _2e0ad9ca = () => interopDefault(import('../code/pages/tutorial/custom-error-handler.vue' /* webpackChunkName: "pages/tutorial/custom-error-handler" */))
const _ae20a86a = () => interopDefault(import('../code/pages/tutorial/data.vue' /* webpackChunkName: "pages/tutorial/data" */))
const _38a4236d = () => interopDefault(import('../code/pages/tutorial/decorator/index.vue' /* webpackChunkName: "pages/tutorial/decorator/index" */))
const _09aa8976 = () => interopDefault(import('../code/pages/tutorial/dependency-injection.vue' /* webpackChunkName: "pages/tutorial/dependency-injection" */))
const _04f4b2b4 = () => interopDefault(import('../code/pages/tutorial/deployment.vue' /* webpackChunkName: "pages/tutorial/deployment" */))
const _1275789d = () => interopDefault(import('../code/pages/tutorial/file.vue' /* webpackChunkName: "pages/tutorial/file" */))
const _2699a646 = () => interopDefault(import('../code/pages/tutorial/format-response.vue' /* webpackChunkName: "pages/tutorial/format-response" */))
const _c3cf200e = () => interopDefault(import('../code/pages/tutorial/get-started.vue' /* webpackChunkName: "pages/tutorial/get-started" */))
const _4a7fe2d8 = () => interopDefault(import('../code/pages/tutorial/graphql.vue' /* webpackChunkName: "pages/tutorial/graphql" */))
const _fba24d58 = () => interopDefault(import('../code/pages/tutorial/guard.vue' /* webpackChunkName: "pages/tutorial/guard" */))
const _4b3bc88f = () => interopDefault(import('../code/pages/tutorial/http-format-result.vue' /* webpackChunkName: "pages/tutorial/http-format-result" */))
const _3465a96b = () => interopDefault(import('../code/pages/tutorial/http-request.vue' /* webpackChunkName: "pages/tutorial/http-request" */))
const _630a5315 = () => interopDefault(import('../code/pages/tutorial/http-response.vue' /* webpackChunkName: "pages/tutorial/http-response" */))
const _d9fc901e = () => interopDefault(import('../code/pages/tutorial/http-result.vue' /* webpackChunkName: "pages/tutorial/http-result" */))
const _3e35d071 = () => interopDefault(import('../code/pages/tutorial/logger.vue' /* webpackChunkName: "pages/tutorial/logger" */))
const _73e256f3 = () => interopDefault(import('../code/pages/tutorial/middleware.vue' /* webpackChunkName: "pages/tutorial/middleware" */))
const _01c59f3c = () => interopDefault(import('../code/pages/tutorial/param.vue' /* webpackChunkName: "pages/tutorial/param" */))
const _219c09f7 = () => interopDefault(import('../code/pages/tutorial/query.vue' /* webpackChunkName: "pages/tutorial/query" */))
const _d1660a10 = () => interopDefault(import('../code/pages/tutorial/route.vue' /* webpackChunkName: "pages/tutorial/route" */))
const _98ecd9f6 = () => interopDefault(import('../code/pages/tutorial/session.vue' /* webpackChunkName: "pages/tutorial/session" */))
const _270ac6e9 = () => interopDefault(import('../code/pages/tutorial/session-provider.vue' /* webpackChunkName: "pages/tutorial/session-provider" */))
const _4f7b65ca = () => interopDefault(import('../code/pages/tutorial/shield.vue' /* webpackChunkName: "pages/tutorial/shield" */))
const _0055e122 = () => interopDefault(import('../code/pages/tutorial/socket-io.vue' /* webpackChunkName: "pages/tutorial/socket-io" */))
const _d1b41088 = () => interopDefault(import('../code/pages/tutorial/swagger/index.vue' /* webpackChunkName: "pages/tutorial/swagger/index" */))
const _b25d7e14 = () => interopDefault(import('../code/pages/tutorial/test/index.vue' /* webpackChunkName: "pages/tutorial/test/index" */))
const _7892599e = () => interopDefault(import('../code/pages/tutorial/type/index.vue' /* webpackChunkName: "pages/tutorial/type/index" */))
const _b42bdcaa = () => interopDefault(import('../code/pages/tutorial/types/index.vue' /* webpackChunkName: "pages/tutorial/types/index" */))
const _e3a78b4c = () => interopDefault(import('../code/pages/tutorial/validation.vue' /* webpackChunkName: "pages/tutorial/validation" */))
const _f4d7fd74 = () => interopDefault(import('../code/pages/tutorial/view.vue' /* webpackChunkName: "pages/tutorial/view" */))
const _7c929959 = () => interopDefault(import('../code/pages/tutorial/view-engine.vue' /* webpackChunkName: "pages/tutorial/view-engine" */))
const _56f46a4e = () => interopDefault(import('../code/pages/tutorial/view-engine-data.vue' /* webpackChunkName: "pages/tutorial/view-engine-data" */))
const _519a3deb = () => interopDefault(import('../code/pages/tutorial/wall.vue' /* webpackChunkName: "pages/tutorial/wall" */))
const _07a3875f = () => interopDefault(import('../code/pages/tutorial/worker.vue' /* webpackChunkName: "pages/tutorial/worker" */))
const _21a0a8f1 = () => interopDefault(import('../code/pages/tutorial/decorator/expect-body.vue' /* webpackChunkName: "pages/tutorial/decorator/expect-body" */))
const _5eb28089 = () => interopDefault(import('../code/pages/tutorial/decorator/expect-query.vue' /* webpackChunkName: "pages/tutorial/decorator/expect-query" */))
const _3013a21f = () => interopDefault(import('../code/pages/tutorial/swagger/initiate.vue' /* webpackChunkName: "pages/tutorial/swagger/initiate" */))
const _4f6fc693 = () => interopDefault(import('../code/pages/tutorial/swagger/model.vue' /* webpackChunkName: "pages/tutorial/swagger/model" */))
const _1a951e9a = () => interopDefault(import('../code/pages/tutorial/test/e2e-test.vue' /* webpackChunkName: "pages/tutorial/test/e2e-test" */))
const _f25161c8 = () => interopDefault(import('../code/pages/tutorial/test/initialize.vue' /* webpackChunkName: "pages/tutorial/test/initialize" */))
const _426174df = () => interopDefault(import('../code/pages/tutorial/test/unit-test.vue' /* webpackChunkName: "pages/tutorial/test/unit-test" */))
const _07b72505 = () => interopDefault(import('../code/pages/tutorial/type/app-option.vue' /* webpackChunkName: "pages/tutorial/type/app-option" */))
const _31b8c9dc = () => interopDefault(import('../code/pages/tutorial/type/http-format-result.vue' /* webpackChunkName: "pages/tutorial/type/http-format-result" */))
const _05325a2e = () => interopDefault(import('../code/pages/tutorial/type/http-request.vue' /* webpackChunkName: "pages/tutorial/type/http-request" */))
const _a8588a9c = () => interopDefault(import('../code/pages/tutorial/type/http-response.vue' /* webpackChunkName: "pages/tutorial/type/http-response" */))
const _696b3a64 = () => interopDefault(import('../code/pages/tutorial/type/http-result.vue' /* webpackChunkName: "pages/tutorial/type/http-result" */))
const _c6b5fcde = () => interopDefault(import('../code/pages/tutorial/type/view-engine-data.vue' /* webpackChunkName: "pages/tutorial/type/view-engine-data" */))
const _aabd25d0 = () => interopDefault(import('../code/pages/tutorial/types/app-option.vue' /* webpackChunkName: "pages/tutorial/types/app-option" */))
const _3ee26962 = () => interopDefault(import('../code/pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _5b6d6aad,
      name: "about-ujjwal"
    }, {
      path: "/community",
      component: _b5ae5e0e,
      name: "community"
    }, {
      path: "/help",
      component: _2705f361,
      name: "help"
    }, {
      path: "/sponsor",
      component: _355e51aa,
      name: "sponsor"
    }, {
      path: "/team",
      component: _1ab70f06,
      name: "team"
    }, {
      path: "/tutorial/app-option",
      component: _68ff1f82,
      name: "tutorial-app-option"
    }, {
      path: "/tutorial/authentication",
      component: _6048b059,
      name: "tutorial-authentication"
    }, {
      path: "/tutorial/body",
      component: _b86d8c7a,
      name: "tutorial-body"
    }, {
      path: "/tutorial/bootstrap",
      component: _0aa2591d,
      name: "tutorial-bootstrap"
    }, {
      path: "/tutorial/components",
      component: _1cde4312,
      name: "tutorial-components"
    }, {
      path: "/tutorial/controller",
      component: _11ab0bfd,
      name: "tutorial-controller"
    }, {
      path: "/tutorial/cookie",
      component: _7f414976,
      name: "tutorial-cookie"
    }, {
      path: "/tutorial/custom-error-handler",
      component: _2e0ad9ca,
      name: "tutorial-custom-error-handler"
    }, {
      path: "/tutorial/data",
      component: _ae20a86a,
      name: "tutorial-data"
    }, {
      path: "/tutorial/decorator",
      component: _38a4236d,
      name: "tutorial-decorator"
    }, {
      path: "/tutorial/dependency-injection",
      component: _09aa8976,
      name: "tutorial-dependency-injection"
    }, {
      path: "/tutorial/deployment",
      component: _04f4b2b4,
      name: "tutorial-deployment"
    }, {
      path: "/tutorial/file",
      component: _1275789d,
      name: "tutorial-file"
    }, {
      path: "/tutorial/format-response",
      component: _2699a646,
      name: "tutorial-format-response"
    }, {
      path: "/tutorial/get-started",
      component: _c3cf200e,
      name: "tutorial-get-started"
    }, {
      path: "/tutorial/graphql",
      component: _4a7fe2d8,
      name: "tutorial-graphql"
    }, {
      path: "/tutorial/guard",
      component: _fba24d58,
      name: "tutorial-guard"
    }, {
      path: "/tutorial/http-format-result",
      component: _4b3bc88f,
      name: "tutorial-http-format-result"
    }, {
      path: "/tutorial/http-request",
      component: _3465a96b,
      name: "tutorial-http-request"
    }, {
      path: "/tutorial/http-response",
      component: _630a5315,
      name: "tutorial-http-response"
    }, {
      path: "/tutorial/http-result",
      component: _d9fc901e,
      name: "tutorial-http-result"
    }, {
      path: "/tutorial/logger",
      component: _3e35d071,
      name: "tutorial-logger"
    }, {
      path: "/tutorial/middleware",
      component: _73e256f3,
      name: "tutorial-middleware"
    }, {
      path: "/tutorial/param",
      component: _01c59f3c,
      name: "tutorial-param"
    }, {
      path: "/tutorial/query",
      component: _219c09f7,
      name: "tutorial-query"
    }, {
      path: "/tutorial/route",
      component: _d1660a10,
      name: "tutorial-route"
    }, {
      path: "/tutorial/session",
      component: _98ecd9f6,
      name: "tutorial-session"
    }, {
      path: "/tutorial/session-provider",
      component: _270ac6e9,
      name: "tutorial-session-provider"
    }, {
      path: "/tutorial/shield",
      component: _4f7b65ca,
      name: "tutorial-shield"
    }, {
      path: "/tutorial/socket-io",
      component: _0055e122,
      name: "tutorial-socket-io"
    }, {
      path: "/tutorial/swagger",
      component: _d1b41088,
      name: "tutorial-swagger"
    }, {
      path: "/tutorial/test",
      component: _b25d7e14,
      name: "tutorial-test"
    }, {
      path: "/tutorial/type",
      component: _7892599e,
      name: "tutorial-type"
    }, {
      path: "/tutorial/types",
      component: _b42bdcaa,
      name: "tutorial-types"
    }, {
      path: "/tutorial/validation",
      component: _e3a78b4c,
      name: "tutorial-validation"
    }, {
      path: "/tutorial/view",
      component: _f4d7fd74,
      name: "tutorial-view"
    }, {
      path: "/tutorial/view-engine",
      component: _7c929959,
      name: "tutorial-view-engine"
    }, {
      path: "/tutorial/view-engine-data",
      component: _56f46a4e,
      name: "tutorial-view-engine-data"
    }, {
      path: "/tutorial/wall",
      component: _519a3deb,
      name: "tutorial-wall"
    }, {
      path: "/tutorial/worker",
      component: _07a3875f,
      name: "tutorial-worker"
    }, {
      path: "/tutorial/decorator/expect-body",
      component: _21a0a8f1,
      name: "tutorial-decorator-expect-body"
    }, {
      path: "/tutorial/decorator/expect-query",
      component: _5eb28089,
      name: "tutorial-decorator-expect-query"
    }, {
      path: "/tutorial/swagger/initiate",
      component: _3013a21f,
      name: "tutorial-swagger-initiate"
    }, {
      path: "/tutorial/swagger/model",
      component: _4f6fc693,
      name: "tutorial-swagger-model"
    }, {
      path: "/tutorial/test/e2e-test",
      component: _1a951e9a,
      name: "tutorial-test-e2e-test"
    }, {
      path: "/tutorial/test/initialize",
      component: _f25161c8,
      name: "tutorial-test-initialize"
    }, {
      path: "/tutorial/test/unit-test",
      component: _426174df,
      name: "tutorial-test-unit-test"
    }, {
      path: "/tutorial/type/app-option",
      component: _07b72505,
      name: "tutorial-type-app-option"
    }, {
      path: "/tutorial/type/http-format-result",
      component: _31b8c9dc,
      name: "tutorial-type-http-format-result"
    }, {
      path: "/tutorial/type/http-request",
      component: _05325a2e,
      name: "tutorial-type-http-request"
    }, {
      path: "/tutorial/type/http-response",
      component: _a8588a9c,
      name: "tutorial-type-http-response"
    }, {
      path: "/tutorial/type/http-result",
      component: _696b3a64,
      name: "tutorial-type-http-result"
    }, {
      path: "/tutorial/type/view-engine-data",
      component: _c6b5fcde,
      name: "tutorial-type-view-engine-data"
    }, {
      path: "/tutorial/types/app-option",
      component: _aabd25d0,
      name: "tutorial-types-app-option"
    }, {
      path: "/",
      component: _3ee26962,
      name: "index"
    }],

    fallback: false
  })
}
