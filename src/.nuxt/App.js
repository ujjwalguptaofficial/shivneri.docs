import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../code/styles/app.styl'

import '../code/styles/common.scss'

import '../code/styles/menu.css'

import '../code/styles/footer.css'

import _6f6c098b from '../code/layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"Shivneri - Component Based MVC Web Framework For crystal","meta":[{"name":"theme-color","content":"#ffffff"},{"name":"msapplication-TileColor","content":"#ffffff"},{"name":"msapplication-TileImage","content":"\u002Fms-icon-144x144.png"},{"name":"description","content":"Component based MVC web framework for crystal targeting good code structures & modularity."},{"name":"robots","content":"index, follow"},{"name":"author","content":"Ujjwal Gupta"},{"name":"Rating","content":"General"},{"name":"Revisit-After","content":"1 days"},{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1.0"},{"property":"og:title","content":"Shivneri - Component based MVC web framework for crystal"},{"property":"og:type","content":"crystal MVC Framework"},{"property":"og:url","content":"http:\u002F\u002Ffortjs.info\u002F"},{"property":"og:site_name","content":"Shivneri"},{"property":"og:description","content":"Component based MVC web framework for crystal targeting good code structures & modularity."},{"property":"og:image","content":"\u002Fimg\u002Ffort_js_logo_1200_630.png"},{"name":"twitter:creator","content":"@ujjwal_kr_gupta"},{"name":"twitter:title","content":"Shivneri - Component based MVC web framework for crystal"},{"name":"twitter:description","content":"Component based MVC web framework for crystal targeting good code structures & modularity."},{"name":"twitter:image","content":"http:\u002F\u002Ffortjs.info\u002Fimg\u002Ffort_js_logo_1200_630.png"}],"link":[{"rel":"apple-touch-icon","sizes":"57x57","href":"\u002Fapple-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"60x60","href":"\u002Fapple-icon-60x60.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"\u002Fapple-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"\u002Fapple-icon-76x76.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"\u002Fapple-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"\u002Fapple-icon-120x120.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"\u002Fapple-icon-144x144.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"\u002Fapple-icon-152x152.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-icon-180x180.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002Ffavicon-192x192.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002Ffavicon-96x96.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Fmanifest.json"},{"rel":"mask-icon","href":"\u002Fsafari-pinned-tab.svg","color":"#5bbad5"}],"style":[],"script":[]},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
