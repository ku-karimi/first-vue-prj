<template>
  <section>
    <div class="part1">
      <div>
        <h2 class="text titr">Featured Products</h2>
        <p class="text">
          Lorem ipsum do olore architecto eum esse odit sapiente temporibus!
          Quia expedita saepe labore voluptatum fugiat.
        </p>
        <a href="#">
          <button class="btn">Shop Now</button>
        </a>
      </div>
      <div class="imgDiv">
        <img
          v-for="(value, index) in source"
          :src="value"
          :key="index"
          alt="shoes"
          class="img"
          :class="{ active: index == count }"
        />
      </div>
    </div>
    <div class="part2">
      <div>
        <p>Producted Category :</p>
      </div>
      <div class="collection">
        <div class="section">
          <div class="imgCollection">
            <img
              src="../img/Screenshot_2025-08-22_102433-removebg-preview.png"
              alt="Icon"
            />
          </div>
          <div>
            <h2>Clothing</h2>
            <p>
              Lorem ipsum dolor sit , inventore dolorum. Fuga repellat ipsam
              mollitia?
            </p>
          </div>
        </div>
        <div class="section">
          <div class="imgCollection">
            <img
              src="../img/Screenshot_2025-08-22_102522-removebg-preview.png"
              alt="Icon"
            />
          </div>
          <div>
            <h2>Footwear</h2>
            <p>
              Lorem ipsum dolor sit , inventore dolorum. Fuga repellat ipsam
              mollitia?
            </p>
          </div>
        </div>
        <div class="section">
          <div class="imgCollection">
            <img
            class="bag"
              src="../img/Screenshot_2025-08-22_102449-removebg-preview.png"
              alt="Icon"
            />
          </div>
          <div>
            <h2>Accessories</h2>
            <p>
              Lorem ipsum dolor sitr, inventore dolorum. Fuga repellat ipsam
              mollitia?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onUnmounted, onMounted } from "vue";

const source = reactive([
  "./src/img/Screenshot_2025-08-19_150339-removebg-preview.png",
  "./src/img/ChatGPT_Image_Aug_19__2025__03_24_59_PM-removebg-preview.png",
  "./src/img/ChatGPT_Image_Aug_19__2025__03_26_02_PM-removebg-preview.png",
  "./src/img/ChatGPT_Image_Aug_19__2025__03_27_06_PM-removebg-preview (1).png",
]);

let count = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    count.value = (count.value + 1) % source.length;
  }, 4000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.part1 {
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  height: auto;
  align-items: center;
  position: relative;
  left: 20px;
}
.text {
  width: 450px;
  color: snow;
  text-align: justify;
}
.titr {
  font-size: 30px;
}
.btn {
  margin-top: 20px;
  background: #0c0907;
  border: none;
  color: snow;
  width: 150px;
  height: 35px;
  font-size: 16px;
  transition: all ease-in 0.6s;
  cursor: pointer;
}
.btn:hover {
  color: #8e1616;
  font-size: 18px;
  background: snow;
}
.imgDiv {
  width: 300px;
  height: 200px;
  overflow: hidden;
  position: relative;
}
.imgDiv img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 100%;
  left: 0;
  transition: top 1s ease-in-out;
  filter: drop-shadow(9px 9px 2px black);
}
.img.active {
  top: 0;
}
.part2 {
  width: 68%;
  margin: auto;
  color: snow;
  height: 450px;
  margin-top: 20px;
}
.collection {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.section {
  width: 30%;
  height: 250px;
  background: #0c0907;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 7px 7px 10px black;
}
.imgCollection {
  width: 50%;
  height: auto;
}
.imgCollection img {
  width: 90%;
  height: auto;
}
.section p {
  width: 80%;
  margin: auto;
  text-align: justify;
  margin-bottom: 10px;
}

@media screen and (max-width: 950px) {
  .part2 {
    width: 83%;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 880px) {
  .part1 {
    flex-wrap: wrap;
    left: 0px;
  }
  .imgDiv {
    order: -1;
  }
  .text {
    width: 60%;
    margin: auto;
  }
  .btn {
    position: relative;
    margin-top: 30px;
    left: 20%;
  }
  .part2 {
    width: 60%;
    height: 700px;
  }
  .collection {
    flex-wrap: wrap;
  }
  .section {
    width: 48%;
  }
  .section:last-child{
    width: 85%;
    height: 200px;
    margin: auto;
    margin-top: 30px;
  }
  .section:last-child img{
    width: 40%;
  }
}
@media screen and (max-width: 710px) {
  .part2 {
    width: 83%;
  }
}
@media screen and (max-width: 500px) {
  .text {
    width: 80%;
    margin: auto;
  }
  .btn {
    margin-top: 30px;
    left: 10%;
  }
  .collection{
    position: relative;
    left: 10%;
  }
  .part2{
    height: 1000px;
  }
  .section{
    width: 80%;
    margin-bottom: 20px;
  }
    .section:last-child{
    width: 80%;
    height: 240px;
    margin: 0px;
    margin-top: 0px;
  }
  .section:last-child img{
    width: 70%;
  }
}
@media screen and (max-width: 369px) {
  .text {
    width: 95%;
  }
  .btn {
    left: 2%;
  }
}
</style>