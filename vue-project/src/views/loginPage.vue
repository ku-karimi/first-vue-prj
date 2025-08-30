<template>
  <div class="body">
    <form novalidate class="form">
      <h2 v-text="header"></h2>
      <span v-text="nameError"></span>
      <input
        v-model="nameValue"
        required
        ref="name"
        minlength="2"
        maxlength="15"
        v-if="header == 'Sign up'"
        type="text"
        placeholder="Acount Name"
      />
      <span v-text="emailError"></span>
      <input
        v-model="emailValue"
        required
        ref="email"
        type="email"
        placeholder="Email"
      />
      <span v-text="passError"></span>
      <input
        v-model="passValue"
        required
        ref="pass"
        maxlength="15"
        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$&?])[A-Za-z\d@#$&?{5,}$"
        type="password"
        placeholder="Password"
      />
      <input
        @click="acountHandeler"
        class="btn"
        type="button"
        :value="header"
      />
      <a v-if="header == 'Login'" @click="header = 'Sign up'">Create Acount</a>
      <a v-else @click="header = 'Login'">You have Acount</a>
      <a v-if="header == 'Login'">Forget Password</a>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const header = ref("Login");
const acountPusitin = ref(false);

const name = ref(null);
const email = ref(null);
const pass = ref(null);

const nameValue = ref("");
const emailValue = ref("");
const passValue = ref("");

const nameError = ref("");
const emailError = ref("");
const passError = ref("");

const users = reactive([
  { name: "karimi", email: "karimi@gmail.com", pass: "Az123" },
  { name: "sara", email: "sara@gmail.com", pass: "Sa234" },
  { name: "mily", email: "mily@gmail.com", pass: "Ml345" },
]);


</script>

<style scoped>
.body {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 150px;
}
h2 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 700;
  color: #fffafabb;
}
input {
  display: block;
  background: #451818;
  width: 500px;
  height: 40px;
  border: 1px solid #fffafa24;
  margin-bottom: 15px;
  border-radius: 7px;
  box-shadow: 6px 8px 4px black;
  color: snow;
  padding-left: 10px;
}
.btn {
  font-size: 18px;
  font-weight: 500;
}
.form a {
  display: block;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  transition: all ease 0.5s;
}
.form a:hover {
  color: snow;
  font-weight: 400;
}
span {
  color: snow;
}
@media screen and (max-width: 550px) {
  .body {
    top: 100px;
  }
  input {
    width: 300px;
  }
}
@media screen and (max-width: 360px) {
  .body {
    top: 110px;
  }
  input {
    width: 280px;
  }
}
</style>