<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    const id = this.$route.params.id
    console.log(this.$route)
    axios.get(`https://randomuser.me/api/?seed=${id}`)
      .then(res => {
        console.log(res)
      })
  }
}
</script>
