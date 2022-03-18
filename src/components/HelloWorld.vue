<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Start by not writing any code.<br>
      No code is the best way to write secure and reliable applications. Write nothing; deploy nowhere.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
