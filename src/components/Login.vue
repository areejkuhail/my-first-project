<template>
  <div>
    <h1>Login</h1>
    <input id="email" type="email" placeholder="Email" v-model="email" />
    <br />
    <input
      id="password"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <br />
    <button @click="login">Login</button>
    <p>
      Don't have an account already?
      <router-link to="/signup">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      initials: "",
    };
  },
  methods: {
    login() {
      this.$router.push({name:'todo'});
    },
  },
};
</script>

<style>


input {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #e2e2e2;
}
button {
  margin: 10px;
  background: #9d9dff;
  padding: 10px 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
}
</style>