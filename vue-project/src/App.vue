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
            @click="openBasket"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="clock"
          >
            <path
              fill="#FFFFFF"
              d="M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"
            ></path>
          </svg>
          <p>{{ cart.length }}</p>
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

    <RouterView class="view" :products="products" />

    <div class="barsMenu" ref="menuBar">
      <RouterLink class="linkMenu" to="/">Home</RouterLink>
      <RouterLink class="linkMenu" to="/shop">Shop</RouterLink>
      <RouterLink class="linkMenu" to="/about">About</RouterLink>
      <RouterLink class="linkMenu" to="/contact">Contact</RouterLink>
      <RouterLink class="linkMenu" to="/login">Login</RouterLink>
    </div>

    <div :class="['basket', { active: basketOpen }]">
      <p class="empt" v-if="cart.length == 0">Empty</p>
      <ul class="list" v-else>
        <li v-for="p in cart" :key="p.name">
          <img :src="p.src" alt="Img Prouduct" />
          <div class="liText">
            <p>{{ p.name }}</p>
            <p>count: {{ p.num }}</p>
            <p>Price: ${{ p.num * p.price }}</p>
          </div>
        </li>
        <div class="btnBasket">
          <button class="btnPay">Pay</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

const toggel = ref(false);
const menuBar = ref(null);

function menuHandeler() {
  if (toggel.value) {
    toggel.value = false;
    menuBar.value.style.right = "-1500px";
  } else {
    toggel.value = true;
    menuBar.value.style.right = "15px";
  }
}

const basketOpen = ref(false);
const openBasket = () => {
  basketOpen.value = !basketOpen.value;
};

const products = reactive([
  {
    src: "./src/img/Screenshot_2025-08-19_150339-removebg-preview.png",
    name: "shoes red",
    num: 0,
    price: 9,
  },
  {
    src: "./src/img/ChatGPT_Image_Aug_19__2025__03_26_02_PM-removebg-preview.png",
    name: "shoes black",
    num: 0,
    price: 12,
  },
  {
    src: "./src/img/ad2b153ff028f3e1e308bb613178c23994ed93f5_xxl-1-removebg-preview.png",
    name: "T-shirt",
    num: 0,
    price: 0.7,
  },
  {
    src: "./src/img/download-removebg-preview.png",
    name: "Scarf",
    num: 0,
    price: 5,
  },
  {
    src: "./src/img/ChatGPT_Image_Aug_19__2025__03_24_59_PM-removebg-preview.png",
    name: "shoes wite",
    num: 0,
    price: 14,
  },
  {
    src: "./src/img/ChatGPT_Image_Aug_19__2025__03_27_06_PM-removebg-preview (1).png",
    name: "shoes new",
    num: 0,
    price: 22,
  },
]);

const cart = computed(() => products.filter((p) => p.num > 0));
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
  min-height: 100vh;
  background: #360a0b;
  overflow-x: hidden;
  overflow-y: scroll;
}
.body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.body::-webkit-scrollbar,
.list::-webkit-scrollbar {
  display: none;
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
  cursor: pointer;
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
.basket {
  position: fixed;
  bottom: 0;
  left: 2%;
  width: 95%;
  height: 0;
  background: #0c0907;
  transition: height 0.5s ease;
  z-index: 10;
  border-radius: 20px 20px 0 0;
  box-shadow: 8px 8px 13px #0c0907;
}
.basket.active {
  height: 70%;
}
.empt {
  position: relative;
  top: 20%;
  text-shadow: 8px 9px 3px #360a0b;
  color: #8e1616;
  font-size: 70px;
  text-align: center;
  font-weight: 800;
}
.list {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 10px;
  overflow-y: scroll;
  max-height: 80%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.list li {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border: 2px solid #8e1616;
  padding: 8px;
  color: snow;
  font-size: 14px;
  font-weight: 300;
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.list img {
  position: relative;
  top: 0px;
  margin: auto;
  max-width: 150px;
  max-height: 200px;
  margin-bottom: 8px;
}

.liText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  margin-top: auto;
}

.liText p:last-child {
  margin-top: auto;
  font-weight: 600;
  color: #f05941;
}
.btnBasket {
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}
.btnPay {
  width: 100px;
  background: #360a0b;
  color: snow;
  height: 40px;
  margin: auto;
  text-align: center;
  border: none;
  cursor: pointer;
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
}
@media screen and (max-width: 450px) {
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
  .list {
    justify-content: space-evenly;
  }
}
</style>