<template>
  <div id="app">
    <style-text ref="style" />
    <work-text ref="work" />
    <page-footer ref="footer" />
  </div>
</template>

<script>
  import StyleText from '@/components/style-text'
  import WorkText from '@/components/work-text'
  import PageFooter from '@/components/footer'
  import Promise from 'bluebird'

  export default {
    name: 'App',
    components: {
      StyleText,
      WorkText,
      PageFooter
    },
    mounted() {
      this.start()
    },
    methods: {
      async start() {
        try {
          await this.$refs.style.write(0)
          await this.$refs.work.write()
          await this.$refs.style.write(1)
          this.$refs.work.showWorkBox()
          await Promise.delay(2000)
          await this.$refs.style.write(2)
          this.$refs.footer.end()
        } catch (e) {
          if (e.message === 'SKIP IT') {
            this.surprisinglyShortAttentionSpan()
          } else {
            throw e
          }
        }
      },
      surprisinglyShortAttentionSpan() {
        this.$refs.style.writeToEnd()
        this.$refs.work.showWorkBox()
        this.$refs.footer.end()
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
    bottom: 20px;
  }
</style>
