<template>
  <div class="information">
    <h1>여행정보입력</h1>
    <h3 style="display: inline;">여행장소입력</h3>
    <br />
    <select name="countries" id="countries">
      <option value="Mexico">멕시코</option>
      <option value="Russia">러시아</option>
      <option value="Germany">독일</option>
      <option value="Spain">스페인</option>
      <option value="States">미국</option>
      <option value="China">중국</option>
      <option value="France">프랑스</option>
      <option value="UK">영국</option>
      <option value="Turkey">터키</option>
      <option value="Italy">이탈리아</option>
      <option value="Korea">한국</option>
    </select>
    <br />
    <br />
    <h3>여행 기간 설정</h3>
    <input type="date" id="from_date" />부터
    <br />
    <input type="date" id="to_date" />까지
    <br />
    <br />

    <h3>여행 인원 수</h3>
    <input type="number" min="1" max="50" step="1" value="2" name="howMany" id="howMany" />

    <button id="confirm_button" @click="confirmValue">확인</button>
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
        if (isNaN(this.$store.state.period) == false) {
          this.$router.push("informations");
        }
        else{
          alert("여행 기간을 설정해주세요.")
        }
      }
    }
  }
};
</script>

<style>
</style>