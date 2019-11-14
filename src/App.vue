<template>
  <div id="app">
    <v-style ref="style" />
    <v-work ref="work" />
  </div>
</template>

<script>
  import VStyle from '@/components/style'
  import VWork from '@/components/work'
  import Promise from 'bluebird'

  export default {
    name: 'App',
    components: {
      VStyle,
      VWork,
    },
    mounted() {
      this.done = false
      this.startAnimation()
    },
    methods: {
      async startAnimation() {
        try {
          await this.$refs.style.write(0)
          await this.$refs.work.write()
          await this.$refs.style.write(1)
          this.$refs.work.showWorkBox()
          await Promise.delay(2000)
          await this.$refs.style.write(2)
          // this.$refs.footer.end()
        } catch (e) {
          if (e.message === 'SKIP IT') {
            this.surprisinglyShortAttentionSpan()
          } else {
            throw e
          }
        }
      },
      surprisinglyShortAttentionSpan() {
        this.$refs.styleText.writeToEnd()
        this.$refs.workText.showWorkBox()
        // this.$refs.footer.end()
      }
    }
  }
</script>

<style lang="scss">
  #app {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
