<template>
  <div class="motherTag">
    <div class="menu">
      <RouterLink class="links" to="/">Home</RouterLink>
      <RouterLink class="links" to="/Help">Help</RouterLink>
      <RouterLink class="links" to="/Profile">Profile</RouterLink>
      <img
        class="imgLinks"
        src="./img/wired-flat-139-basket-hover-pinch.svg"
        alt="basket"
        @click="menuIsOpen = !menuIsOpen "
      />
    </div>
    <div class="basket" :class="{open : menuIsOpen}">
      <span class="close" @click="menuIsOpen = !menuIsOpen">X</span>
      <span class="empt">Empty</span>
    </div>
    <RouterView class="view" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuIsOpen = ref(false);

</script>

<style scoped>
@keyframes color {
  
}
.view {
  position: relative;
  top: -58px;
  overflow: hidden;
}
.menu {
  z-index: 1;
  background: #ffffff;
  background: linear-gradient(
    157deg,
    rgba(61, 61, 61, 0.8) 0%,
    rgba(171, 171, 171, 0.8) 60%,
    rgba(255, 255, 255, 0.8) 100%
  );
  display: flex;
  justify-content: space-evenly;
  width: 500px;
  border-radius: 16px;
  align-items: center;
  height: 58px;
  position: sticky;
  left: 40px;
  top: 30px;
  box-shadow: 5px 5px 10px;
  border: 1px solid #757575;
}
.links {
  text-decoration: none;
  color: snow;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.7s;
  text-shadow: 3px 6px 4px black;
}
.imgLinks {
  width: 38px;
  height: auto;
  cursor: pointer;
  transition: all 1s ease-out;
}
.imgLinks:hover {
  transform: rotate(360deg);
}
.links:hover,
.router-link-active,
.router-link-exact-active {
  background: linear-gradient(to right, #191919, #ed473e, #fd746c);
  color: transparent;
  background-clip: text;
}
.basket {
  z-index: 2;
  height: 0vh;
  width: 90%;
  position:fixed;
  top: 193px;
  left: 5%;
  text-align: center;
  border-radius: 3px 3px 0px 0px;
  background-color: #2a2a2a;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  box-shadow: 10px 0px 15px;
  opacity: 0;
  filter: blur(30px);
}
.basket.open {
  height: 70vh;
  opacity: 1;
  filter: none;
  animation: color 1s linear 0.1s 1 ease-in-out;
}
.close {
  color: snow;
  font-size: 20px;
  font-weight: 900;
  display: block;
  padding-left: 20px;
  padding-top: 10px;
  float: left;
  cursor: pointer;
}
.empt {
  position: relative;
  top: 30%;
  background: #ffffff;
  background: linear-gradient(
    263deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(161, 50, 50, 1) 60%,
    rgba(181, 0, 0, 1) 80%
  );
  background-position: center;
  color: transparent;
  background-clip: text;
  font-size: 80px;
  font-weight: 900;
  display: block;
}
@media screen and (max-width: 850px) {
  .menu {
    left: 10px;
  }
}
@media screen and (max-width: 600px) {
  .menu {
    width: 100%;
    border-radius: 0px;
  }
  .basket {
    width: 96%;
    left: 2%;
    box-shadow: none;
    border-radius: 10px 10px 0px 0px;
  }
}
</style>