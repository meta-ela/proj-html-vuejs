<template>
  <div id="app">
    <!-- sezione navbar e jumbotron -->
    <TheHeader></TheHeader>
    <!-- suddiviso in 6 sezioni/microaree -->
    <TheMain></TheMain>
    <!-- suddiviso in 2 sezioni -->
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheMain,
    TheFooter
}
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";

</style>
