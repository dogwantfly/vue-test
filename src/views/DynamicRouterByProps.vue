<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  created () {
    const id = this.id
    console.log(this.id)
    axios.get(`https://randomuser.me/api/?seed=${id}`)
      .then(res => {
        console.log(res)
      })
  }
}
</script>
