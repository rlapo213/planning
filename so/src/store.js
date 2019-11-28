import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    //this.$store.state.변수명
    nation: "",
    people: Number,
    period: Number,
    a: Boolean,
  },
  mutations: {
    confirmValue: function (state) {
      var country = document.getElementById("countries");
      var from_date = document.getElementById("from_date");
      var to_date = document.getElementById("to_date");
      var howMany = document.getElementById("howMany");
      var country_value = country.value;
      var from_date_value = from_date.value;
      var to_date_value = to_date.value;
      var howMany_value = howMany.value;

      var from_year, from_month, from_day, to_year, to_month, to_day;
      var now = new Date();

      from_year = parseInt(from_date_value.slice(0, 4));
      from_month = parseInt(from_date_value.slice(5, 7));
      from_day = parseInt(from_date_value.slice(8, 10));

      to_year = parseInt(to_date_value.slice(0, 4));
      to_month = parseInt(to_date_value.slice(5, 7));
      to_day = parseInt(to_date_value.slice(8, 10));

      var from = new Date(from_year, from_month - 1, from_day);
      var to = new Date(to_year, to_month - 1, to_day);

      var left_date = Math.ceil(
        (to.getTime() - from.getTime()) / 1000 / 60 / 60 / 24);

      left_date++;

      state.a = confirm(
        "여행 장소 : " +
        country_value +
        "\n" +
        "여행 시작 : " +
        from_date_value +
        "부터  " +
        to_date_value +
        "까지\n" +
        "여행 인원 수 : " +
        howMany_value +
        "\n" +
        "여행 기간 : " +
        left_date
      );
      state.nation = country_value;
      state.people = howMany_value;


      state.period = left_date;

    }
  },
  actions: {
    
  }
})
