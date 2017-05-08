<template>
  <div>
    <h1>{{msg}}</h1>
    <p>ここはヘッダーです。</p>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
