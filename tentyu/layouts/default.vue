<template>
  <div class="page">
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header.vue"; // headerをインポート
import Footer from "@/components/footer.vue"; // footerをインポート
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
$pc: 1024px; // PC
$tab: 680px; // タブレット
$sp: 480px; // スマホ

@mixin pc {
  @media (max-width: ($pc)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
main {
  min-height: 100vh;
  text-align: center;
  background-color: #eeeeee !important;
  padding: 12px 0px;
  flex: 1;

  @include sp {
    min-height: 70vh;
  }
}
body {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: 0.5s cubic-bezier(1, 0.25, 0.25, 1);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(0, 30px);
}
.page {
  background-color: #eeeeee;
}
</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
