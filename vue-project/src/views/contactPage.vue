<template>
  <div class="body">
    <div class="text">
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur
        adipisicing elit. Provident deleniti, exercitationem doloribus,
        voluptatibus unde cupiditate minima quia harum possimus laudantium,
        nihil nemo beatae asperiores cum officiis ipsam ab! Soluta, vel. ia
        autem eum veritatis! Eius um recusandae eius asperiores
      </p>
    </div>
    <div class="section">
      <div class="side">
        <h3>Get in touch</h3>
        <form @submit.prevent="submitHandeler" novalidate>
          <span v-text="nameSpan"></span>
          <input
            required
            ref="nameGet"
            minlength="3"
            v-model="name"
            maxlength="15"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
          />
          <span v-text="emailSpan"></span>
          <input
            required
            ref="emailGet"
            v-model="email"
            placeholder="Email"
            type="email"
            name="email"
            id="email"
          />
          <span v-text="textSpan"></span>
          <textarea
            ref="textGet"
            required
            minlength="10"
            v-model="message"
            maxlength="50"
            placeholder="Message"
            name="text"
            id="text"
          ></textarea>
          <input ref="btn" type="submit" class="btn" value="Submit" />
        </form>
      </div>
      <div class="side">
        <h3>Contact information</h3>
        <div class="links">
          <a class="addres">123 Streeet Name Citu,State, 12345</a>
          <a class="addres" href=":tel:+1 234 567 890">+1 234 567 890</a>
          <a class="addres" href=":mailto:info@example.com">info@example.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const nameGet = ref(null);
const emailGet = ref(null);
const textGet = ref(null);
const Contact = reactive([]);

const nameSpan = ref("");
const emailSpan = ref("");
const textSpan = ref("");

const submitHandeler = () => {
  if (
    nameGet.value.checkValidity() &&
    emailGet.value.checkValidity() &&
    textGet.value.checkValidity()
  ) {
    const userMessage = ref({
      name: name.value,
      email: email.value,
      message: message.value,
    });
    Contact.push(userMessage.value);
    name.value = "";
    email.value = "";
    message.value = "";
    console.log(Contact);
  } else {
    nameGet.value.checkValidity() == false
      ? (nameSpan.value = "name showd be betwin 2-15")
      : (nameSpan.value = "");
    emailGet.value.checkValidity() == false
      ? (emailSpan.value = "email format is not true")
      : (emailSpan.value = "");
    textGet.value.checkValidity() == false
      ? (textSpan.value = "text showd bettuin 10-50")
      : (textSpan.value = "");
  }
};
</script>

<style scoped>
@keyframes border {
  0% {
    border-image: linear-gradient(to right, rgb(255, 255, 255), #6f0000) 1;
  }
  2% {
    border-image: linear-gradient(to right, rgb(104, 68, 68), #6f0000) 1;
  }
  10% {
    border-image: linear-gradient(to right, #6f0000, #f05941) 1;
  }
  30% {
    border-image: linear-gradient(to right, #f05941, #8c3061) 1;
  }
  50% {
    border-image: linear-gradient(to right, #8c3061, #ae445a) 1;
  }
  70% {
    border-image: linear-gradient(to right, #ae445a, #704264) 1;
  }
  90% {
    border-image: linear-gradient(to right, #704264, #d84040) 1;
  }
  100% {
    border-image: linear-gradient(to right, #d84040, #e19898) 1;
  }
}
.body {
  width: 70%;
  margin: auto;
}
.text {
  color: snow;
  text-align: justify;
  display: block;
}
.text h2 {
  font-size: 30px;
}
.section {
  display: flex;
  flex-wrap: wrap;
  color: snow;
  font-weight: 500;
  margin-top: 10px;
}
.side h3 {
  font-size: 20px;
}
form {
  padding-top: 20px;
}
input,
textarea {
  display: block;
  background: #451818;
  width: 500px;
  border: 1px solid #fffafa4c;
  margin-bottom: 15px;
  border-radius: 7px;
  box-shadow: 5px 5px 8px black;
  color: snow;
  padding-left: 10px;
}
input {
  height: 35px;
}
textarea {
  height: 80px;
  overflow: hidden;
  padding-top: 10px;
  font-size: 15px;
}
input::placeholder,
textarea::placeholder {
  color: snow;
  padding-left: 12px;
  font-weight: 500;
}
input:focus,
textarea:focus {
  outline: none;
  padding-left: 10px;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, rgb(255, 255, 255), #6f0000) 1;
  animation: border 4s ease-in-out 0.2s infinite;
}
.btn {
  width: 20%;
  color: snow;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
}
.side:last-child {
  width: 200px;
  position: relative;
  left: 6%;
}
.links {
  position: relative;
  top: 20%;
}
.links a {
  display: block;
  text-decoration: none;
  color: snow;
  margin-bottom: 10px;
}
form span {
  color: snow;
}
@media screen and (max-width: 1050px) {
  .body {
    width: 90%;
  }
  .side:last-child {
    left: 4%;
  }
}
@media screen and (max-width: 800px) {
  .side:nth-child(1) {
    margin: auto;
    margin-bottom: 20px;
  }
  .side:last-child {
    width: 100%;
    margin: auto;
    height: 60px;
    left: 0px;
  }
  .side:last-child h3 {
    margin-bottom: 10px;
  }
  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin: auto;
  }
}
@media screen and (max-width: 570px) {
  input,
  textarea {
    width: 300px;
  }
  .links {
    font-size: 12px;
    font-weight: 200;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 390px) {
  input,
  textarea {
    width: 230px;
  }
  .btn {
    font-size: 12px;
    font-weight: 200;
    width: 25%;
    padding-left: 0px;
  }
}
</style>