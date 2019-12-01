<template>
  <div class="information">
    <div id="in">여행정보입력</div>
    <h2 style="display: inline;">여행장소입력</h2>
    <br />
    <select name="countries" id="countries">
      <option value="Mexico">멕시코</option>
      <option value="Russia">러시아</option>
      <option value="Germany">독일</option>
      <option value="States">미국</option>
      <option value="China">중국</option>
      <option value="France">프랑스</option>
      <option value="UK">영국</option>
      <option value="Italy">이탈리아</option>
    </select>
    <br />
    <br />
    <h2>여행 기간 설정</h2>
    <input type="date" id="from_date" class="g" />부터
    <br />
    <input type="date" id="to_date" class="g" />까지
    <br />
    <br />

    <h2>여행 인원 수</h2>
    <input type="number" min="1" max="50" step="1" value="2" name="howMany" id="howMany" class="g"  />

    <button id="confirm_button" @click="confirmValue()">확인</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    confirmValue() {
      this.$store.commit("confirmValue");
      if (this.$store.state.a) {
        if (isNaN(this.$store.state.period) == false && this.$store.state.period>0) {
          this.$router.push("informations");
        }
        else{
          alert("여행 기간을 확인해주세요")
        }
      }
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Jua&display=swap");
.information{
  background-image: url("../assets/map.png");
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}


#in {
  font-family: "Jua", sans-serif;
  text-align: center;
  font-size: 4em;
  margin-top: 10px;
  margin-bottom: 0.8em;
}

h2 {
  font-family: "Jua", sans-serif;
  color: black;
  margin-left: 100px;
  font-size: 2.5em;
}

.g,
#countries{
  border: 2px solid black;
  height: 30px;
  padding: 3px;
  margin: 0.5em 0.5em 0.5em 7.5vw;
}


#confirm_button {
  border: 2px solid black;
  margin: 0.5em;
  padding: 0.4em;
  background-color: #ffffff;
  cursor: pointer;
}
</style>