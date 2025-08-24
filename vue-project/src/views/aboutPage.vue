<template>
  <div class="body">
    <div class="text">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum
        voluptatibus magni ullam harum maxime dolore facere placeat eum atque
        iusto accusamus aperiam facilis ab ad consectetur debitis ipsa, quis
        quam! Libero nam impedit ducimus tempora beatae itaque enim vero.
        Placeat veniam voluptate vero nemo debitis repellat, maxime
        voluptatibus, hic minus vel culpa voluptatem reprehenderit cum illo
        dicta? Nihil eos, magnam quae aliquid minima id aspernatur eius laborum
        vitae fugiat repudiandae, ab impedit maiores officia esse et voluptates
        sequi repellat aliquam reiciendis! Saepe quidem in impedit fugit
        incidunt tempore, at maiores minima quibusdam quae vitae molestias
        cumque labore tempora reprehenderit.
      </p>
    </div>
    <div class="img">
      <img src="../img/Screenshot 2025-08-24 130204.png" alt="Image about" />
    </div>
    <div class="btnDiv">
      <button class="btn">Read More</button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.body {
  color: snow;
  font-weight: 400;
  width: 60%;
  margin: auto;
  margin-top: 20px;
  text-align: justify;
}
.text h2 {
  font-size: 35px;
}
.img {
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img img {
  width: 50%;
  height: auto;
}
.btn {
  width: 160px;
  height: 35px;
  border: none;
  outline: none;
  background: #0c0907;
  color: snow;
  font-size: 15px;
  transition: all ease-out 0.7s;
  position: relative;
  top: 20px;
}
.btn:hover {
  background: white;
  color: #360a0b;
}
@media screen and (max-width: 950px) {
  .body{
    width: 80%;
  }
  .img img{
    width: 70%;
  }
}
@media screen and (max-width: 450px) {
  .body{
    width: 95%;
  }
  .img img{
    width: 80%;
  }
}
</style>