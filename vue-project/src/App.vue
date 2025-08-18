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
        <p>Login</p>
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
    </nav>
    <RouterView class="view"></RouterView>
  </div>
</template>

<script setup>
</script>

<style scoped>
@keyframes active {
  0%{
    color: #8E1616;
  }
  10%{
    color: #F05941;
  }
  25%{
    color: #8C3061;
  }
  30%{
    color: #E19898;
  }
  50%{
    color: #D84040;
  }
  75%{
    color: #704264;
  }
  100%{
    color: #AE445A;
  }
}

.body {
  width: 100%;
  height: 100vh;
  background: #360a0b;
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
}
.logo {
  color: snow;
  font-size: 40px;
  font-weight: 900;
}
.menu{
  display: flex;
  justify-content: space-between;
  width: 350px;
}
.link{
  color: snow;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  transition: all 1s;
}
.login{
  display: flex;
  justify-content: space-between;
  width: 90px;
  color: snow;
}
.num{
  display: flex;
  justify-content: space-between;
  width: 35px;
}
.num svg{
  width: 20px;
}
.router-link-active,
.router-link-exact-active{
  font-size: 19px;
  font-weight: 600;
  animation: active 6s ease-out 0.3s infinite alternate ;
}

.view {
  padding-left: 70px;
  padding-right: 70px;
}
</style>