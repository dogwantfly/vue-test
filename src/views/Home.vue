<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ title }}
    <!-- form -->
    <Form @submit="onSubmit" v-slot="{ errors }" class="container">
    {{ errors }}
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <Field id="email" name="email" type="email" class="form-control" placeholder="請輸入 Email" v-model="this.user.email" rules="email|required" :class="{ 'is-invalid': errors['email'] , 'is-valid': !errors['email'] && user.email}"></Field>
      <error-message name="email" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">姓名</label>
      <input id="name" name="姓名" type="text" class="form-control"
               placeholder="請輸入姓名">
      <span class="invalid-feedback"></span>
    </div>

    <div class="mb-3">
      <label for="phone" class="form-label">電話</label>
      <Field id="phone" name="電話" type="text" v-model="user.phone" class="form-control" placeholder="請輸入電話" :rules="isPhone" :class="{ 'is-invalid': errors['電話'] , 'is-valid': !errors['電話'] && user.phone}"></Field>
      <error-message class="invalid-feedback" name="電話"></error-message>
    </div>

    <div class="mb-3">
      <label for="region" class="form-label">地區</label>
      <select id="region" name="地區" class="form-control">
        <option value="">請選擇地區</option>
        <option value="台北市">台北市</option>
        <option value="高雄市">高雄市</option>
      </select>
      <span class="invalid-feedback"></span>
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">地址</label>
      <input id="address" name="地址" type="text" class="form-control"
               placeholder="請輸入地址">
      <span class="invalid-feedback"></span>
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>
  </Form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      user: {},
      title: process.env.VUE_APP_TITLE
    }
  },
  methods: {
    onSubmit () {
      console.log(this.user)
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  created () {
    console.log(this)
  }
}
</script>
