<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="formitem">
        <label for="uname"><b>email</b></label>
        <input
          name="uname"
          type="email"
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
    async login() {
      console.log("somethign");
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.userdata),
      };
      const response = await fetch(
        "http://localhost:8000/login",
        requestOptions
      );
      const data = await response.json();
    //   console.log("res", data);
      if(data.status === 'successful'){
          this.$router.push('/todo')
      }
    },
  },
};
</script>
<style scoped lang="scss" src="@/styles/login.scss"></style>
