<template>
  <div class="body">
    <nav>
      <div class="logo">Shop</div>
      <div class="menu">
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/shop">Shop</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
        <RouterLink class="link" to="/contact">Contact</RouterLink>
      </div>
      <div class="login">
        <RouterLink class="link" to="/login">Login</RouterLink>
        <div class="num">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="clock"
          >
            <path
              fill="#FFFFFF"
              d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"
            ></path>
          </svg>
          <p>0</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="bars"
        @click="menuHandeler"
      >
        <path
          fill="#FFFFFF"
          d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </nav>
    <RouterView class="view"></RouterView>
    <div class="barsMenu" ref="menuBar">
      <RouterLink class="linkMenu" to="/">Home</RouterLink>
      <RouterLink class="linkMenu" to="/shop">Shop</RouterLink>
      <RouterLink class="linkMenu" to="/about">About</RouterLink>
      <RouterLink class="linkMenu" to="/contact">Contact</RouterLink>
      <RouterLink class="linkMenu" to="/ligin">Login</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toggel = ref(false);
const menuBar = ref(null);

function menuHandeler() {
  if (toggel.value) {
    toggel.value = false;
    menuBar.value.style.right = "-1500px"; // برگرده بیرون
  } else {
    toggel.value = true;
    menuBar.value.style.right = "15px"; // بیاد داخل صفحه
  }
}
</script>

<style scoped>
@keyframes active {
  0% {
    color: #8e1616;
  }
  10% {
    color: #f05941;
  }
  25% {
    color: #8c3061;
  }
  30% {
    color: #ae445a;
  }
  50% {
    color: #704264;
  }
  75% {
    color: #d84040;
  }
  100% {
    color: #e19898;
  }
}

.body {
  width: 100%;
  height: 110vh;
  background: #360a0b;
  overflow: hidden;
}
nav {
  width: 100%;
  height: 75px;
  background: #0c0907;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
  position: fixed;
  z-index: 5;
}
.logo {
  color: snow;
  font-size: 40px;
  font-weight: 900;
}
.menu {
  display: flex;
  justify-content: space-between;
  width: 350px;
}
.link {
  color: snow;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  transition: all 1s;
}
.login {
  display: flex;
  justify-content: space-between;
  width: 90px;
  color: snow;
}
.num {
  display: flex;
  justify-content: space-between;
  width: 35px;
}
.num svg {
  width: 20px;
}
#bars {
  display: none;
  width: 30px;
}
.barsMenu {
  z-index: 3;
  height: calc(98vh - 75px - 6px);
  width: 260px;
  transition: right 0.5s ease;
  display: block;
  background: #0c0907;
  position: fixed;
  top: 80px;
  right: -1500px;
  outline: 2px solid rgb(46, 0, 0);
  border-radius: 40px 0px 0px 0px;
  -webkit-box-shadow: -27px 23px 19px 3px rgba(0, 0, 0, 0.82);
  box-shadow: -27px 23px 19px 3px rgba(0, 0, 0, 0.82);
  padding-top: 50px;
}

.linkMenu {
  direction: rtl;
  width: 90%;
  display: block;
  color: snow;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  transition: all 1s;
  padding: 14px;
}
.router-link-active {
  font-size: 19px;
  font-weight: 600;
  animation: active 6s ease-out 0.3s infinite alternate;
}
.view {
  z-index: 2;
  position: relative;
  top: 100px;
}
@media screen and (max-width: 850px) {
  #bars {
    display: inline;
  }
  .menu {
    display: none;
  }
  .link {
    display: none;
  }
  .login {
    position: relative;
    left: 30%;
  }
  .body{
    height: 130vh;
  }
}
@media screen and (max-width: 450px) {
  .body{
    height: 200vh;
  }
  .login {
    position: relative;
    left: 10%;
  }
  nav {
    padding-left: 30px;
    padding-right: 30px;
  }
  .view {
    height: 100vh;
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media screen and (max-width: 320px){
  .body{
    height: 290vh;
  }
}
</style>