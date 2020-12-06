<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="post">
      <div class="formitem">
        <label for="uname"><b>email</b></label>
        <input
          name="uname"
          type="text"
          v-model="userdata.email"
          placeholder="Enter email"
          autocomplete="section-blue shipping street-address"
        />
      </div>

      <div class="formitem">
        <label for="pwd"><b>Password</b></label>
        <input
          type="password"
          v-model="userdata.password"
          placeholder="Enter Password"
          name="pwd"
        />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userdata: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    post() {
      console.log("posting", this.userdata);
    },
  },
};
</script>
<style scoped lang="scss" src="@/styles/login.scss"></style>
