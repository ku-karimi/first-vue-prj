<template>
  <div class="body">
    <div class="serchDiv">
      <input type="search"  v-model="search" placeholder="SEARCH" name="serch" id="serch" />
    </div>
    <p class="text">Popular Products</p>
    <div class="collection">
      <div class="product" v-for="(value, index) in filteredProducts" :key="index">
        <div class="imgProuduct">
          <img :src="value.src" alt="product" />
        </div>
        <div class="information">
          <p class="name" v-text="value.name"></p>
          <button class="btn" v-if="value.num == 0" @click="value.num++">
            ${{ value.price }}
          </button>
          <button class="btn" v-else :class="{ activ: value.num > 0 }">
            <svg
              @click="value.num--"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="minus-circle"
            >
              <path
                fill="#FFFFFF"
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
            {{ value.num * value.price }}
            <svg
              @click="value.num++"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="plus-circle"
            >
              <path
                fill="#FFFFFF"
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-9H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive,computed,ref } from "vue";

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
    src: "./src/img/images__1_-removebg-preview.png",
    name: "Dreess woman",
    num: 0,
    price: 3.5,
  },
  {
    src: "./src/img/images-removebg-preview.png",
    name: "Shirt man",
    num: 0,
    price: 4,
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
const search = ref("");

const filteredProducts = computed(() =>
  products.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<style scoped>
.serchDiv {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}
#serch {
  width: 45%;
  height: 40px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: #1107077d;
  background-image: url(../img/av6584c34aabb39f00a10.png);
  background-repeat: no-repeat;
  background-position: -3px -5px;
  padding-left: 40px;
  padding-right: 20px;
  font-weight: 700;
  color: snow;
  transition: all ease-in-out 1s;
  border: 1px solid #fffafa10;
}
#serch:focus {
  box-shadow: 7px 7px 8px black;
  background: #c32222;
  background: linear-gradient(
    137deg,
    rgba(195, 34, 34, 1) 0%,
    rgba(99, 24, 24, 1) 50%
  );
}
.text {
  width: 100%;
  display: block;
  color: snow;
  font-size: 20px;
  margin-top: 35px;
  padding-left: 4%;
}
.collection {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
}
.product {
  width: 300px;
  height: 350px;
  background: #3c0e0e;
  text-align: center;
  color: snow;
  font-size: 19px;
  font-weight: 800;
  text-shadow: 5px 5px 3px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.imgProuduct{
  overflow: hidden;
}
.imgProuduct img {
  max-height: 250px;
  max-width: 280px;
  filter: drop-shadow(8px 10px 3px black);
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 1s;
}
.imgProuduct img:hover{
  transform: scale(1.1);
}
.information {
  margin-top: auto;
  text-align: center;
  width: 100%;
}
.btn {
  width: 40%;
  background: #0c0907;
  height: 29px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  color: snow;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 10px 10px 9px #110707;
  margin: auto;
  margin-bottom: 15px;
  margin-top: 10px;
  transition: all ease-in-out 0.7s;
}
.btn:hover {
  box-shadow: none;
}
.activ {
  border: 2px solid #c32222;
}
.btn svg {
  width: 20px;
}

@media screen and (max-width: 1010px) {
  #serch {
    width: 70%;
  }
  .text {
    margin-left: 5%;
  }
}
@media screen and (max-width: 600px) {
.product {
  width: 200px;
  height: 250px;
}
.imgProuduct img{
  
  max-height: 150px;
  max-width: 180px;
}
}
</style>