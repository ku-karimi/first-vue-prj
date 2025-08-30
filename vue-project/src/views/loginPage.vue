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

const clearErrors = () => {
  nameError.value = "";
  emailError.value = "";
  passError.value = "";
};

const acountHandeler = () => {
  clearErrors();

  // login
  if (header.value === "Login") {
    if (!email.value.checkValidity()) {
      emailError.value = " Please enter a valid email.";
      return;
    }
    if (!pass.value.checkValidity()) {
      passError.value =
        " Password must be 6-15 characters with A-Z, a-z, number & symbol.";
      return;
    }

    const user = users.find((u) => u.email === emailValue.value);

    if (!user) {
      emailError.value = " No account found with this email.";
      return;
    }

    if (user.pass !== passValue.value) {
      passError.value = " Your password does not match.";
      return;
    }

    acountPusitin.value = true;
    alert(" Login successful!");
  }

  // sign up
  if (header.value === "Sign up") {
    if (!name.value.checkValidity()) {
      nameError.value = " Name must be 2-15 characters.";
      return;
    }
    if (!email.value.checkValidity()) {
      emailError.value = " Please enter a valid email.";
      return;
    }
    if (!pass.value.checkValidity()) {
      passError.value =
        " Password must be 6-15 characters with A-Z, a-z, number & symbol.";
      return;
    }

    const userExists = users.some((u) => u.email === emailValue.value);
    if (userExists) {
      emailError.value = " Email already exists.";
      return;
    }

    users.push({
      name: nameValue.value,
      email: emailValue.value,
      pass: passValue.value,
    });

    alert(" Account created successfully!");
    header.value = "Login";
    nameValue.value = "";
    emailValue.value = "";
    passValue.value = "";
  }
};
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