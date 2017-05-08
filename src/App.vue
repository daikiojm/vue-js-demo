<template>
  <div>
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <button @click="hoge()">hoge</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    clear () {
      this.msg = ''
    },
    hoge () {
      this.msg = 'hoge'
    }
  }
}
</script>
