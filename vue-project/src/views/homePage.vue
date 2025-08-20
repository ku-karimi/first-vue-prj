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
        <div class="images">
          <img
            class="img"
            src="../img/Screenshot_2025-08-19_150339-removebg-preview.png"
            alt="shoes"
          />
          <img
            class="img"
            src="../img/ChatGPT_Image_Aug_19__2025__03_24_59_PM-removebg-preview.png"
            alt="shoes"
          />
          <img
            class="img"
            src="../img/ChatGPT_Image_Aug_19__2025__03_26_02_PM-removebg-preview.png"
            alt="shoes"
          />
          <img
            class="img"
            src="../img/ChatGPT_Image_Aug_19__2025__03_27_06_PM-removebg-preview (1).png"
            alt="shoes"
          />
        </div>
      </div>
    </div>
    <div class="part2">
      <div>
        <p>Producted Category</p>
      </div>
      <div>
        <div>
          <svg></svg>
          <div>
            <h4>Clothing</h4>
            <p>
              Lorem ipsum dolor sit , inventore dolorum. Fuga repellat ipsam
              mollitia?
            </p>
          </div>
        </div>
        <div>
          <svg></svg>
          <div>
            <h4>Accessories</h4>
            <p>
              Lorem ipsum dolor sitr, inventore dolorum. Fuga repellat ipsam
              mollitia?
            </p>
          </div>
        </div>
        <div>
          <svg></svg>
          <div>
            <h4>Footwear</h4>
            <p>
              Lorem ipsum dolor sit , inventore dolorum. Fuga repellat ipsam
              mollitia?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.part1 {
  width: 99%;
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
  transition: all ease-in  0.6s;
  cursor: pointer;
}
.btn:hover {
  color: #8e1616;
  font-size: 18px;
  background: snow;
}
.imgDiv {
  width: 450px;
  height: 290px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.images{
  position: relative;
}
.img {
  width: 450px;
  filter: drop-shadow(9px 9px 2px black);
  transition: all ease-in 0.7s;
}
.img:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 880px) {
  .part1{
    flex-wrap: wrap;
    left: 0px;
  }
  .imgDiv{
    order: -1;
  }
  .text{
    width: 60%;
    margin: auto;
  }
  .btn{
    position: relative;
    margin-top: 30px;
    left: 20%;
  }
}
@media screen and (max-width: 500px) {
.imgDiv {
  width: 100%;
  height: 160px;
  }
  .img{
    position: relative;
    width: 300px;
    left: calc((100% - 300px) / 2);
  }
  .text{
    width: 80%;
    margin: auto;
  }
  .btn{
    margin-top: 30px;
    left: 10%;
  }
}
@media screen and (max-width: 369px) {
.imgDiv {
  height: 160px;
  }
  .img{
    position: relative;
    width: 250px;
    left: calc((100% - 250px) / 2);
  }
  .text{
    width: 95%;
  }
  .btn{
    left: 2%;
  }
}
</style>