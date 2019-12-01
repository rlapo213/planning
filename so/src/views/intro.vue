<template>
  <div class="intro">
    <h1 id="w">뭐 챙기지 ?</h1>
    <div id="alp"></div>
    <button @click="toHome()" id="z">뭐 챙겨야돼..?</button>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push("home");
    }
  }
};
</script>

<style>
#w{
  font-family: "Jua", sans-serif;
  text-align: center;
  font-size: 3.5em;
}
#alp {
  background-image: url("../assets/a.gif");
  background-size: 20vw 60vh;
  background-repeat: no-repeat;
  width: 20vw;
  height: 60vh;
  margin-bottom: 10px;
  border-radius: 10px;
}
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
#z {
  width: 10.5vw;
  border-radius: 1.5em;
  background-color: #ffffff;
  cursor: pointer;
  height: 7vh;
  border: 2px solid black;
  font-size: 1em;
}
</style>