<template>
  <div class="main" ref="back">
    <div id="left">
      <div class="createbox">
        <!-- 단기간 여행 -->
        <div class="createinput">
          <input type="text" class="b" v-model="date" placeholder="여행 날짜를 입력하세요" />
          <input type="text" class="b" v-model="time" placeholder="시간을 입력하세요" />
          <input type="text" class="b" v-model="doing" placeholder="일정을 입력하세요" />
          <input type="text" class="b" v-model="note" placeholder="비고를 입력하세요" />
        </div>
        <button @click="addtimetable" id="ctime">시간표 생성하기</button>
      </div>
      <table border="1" class="tl">
        <caption>
          <strong>시간표</strong>
        </caption>
        <thead>
          <tr>
            <th>여행일</th>
            <th>시간</th>
            <th>일정</th>
            <th>비고</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          <timetables
            :timetables="timetables"
            @click="deleteThis(idx)"
            class="timet"
            v-for="(timetables,idx) in tt"
            :key="idx"
          ></timetables>
        </tbody>
      </table>
    </div>
    <div class="careful">
      <div class="common">
        <div id="to">해외여행 주의점 !</div>
        <div>문화의 차이를 인정해요</div>
        <div>소매치기를 조심하세요</div>
        <div>여행국의 질병을 확인하세요</div>
        <div>외교통상부 홈페이지에서</div>
        <div>여행지의 안전정보를 확인하세요</div>
      </div>
      <div class="cu">
        <div ref="country" id="con"></div>
        <div ref="careful" class="jj"></div>
      </div>
    </div>
    <div id="right">
      <div id="top">Package List</div>
      <div id="mid">
        <input type="text" class="todoinput" v-model="todoname" />
        <button class="todobutton" @click="addtodo">ADD</button>
      </div>
      <br />
      <todolists :todolists="data" />
    </div>
  </div>
</template>

<script>
import todolists from "../components/todolists.vue";
import timetables from "../components/timetables.vue";
export default {
  components: {
    todolists,
    timetables
  },
  methods: {
    setting() {
      const key = this.$store.state.nation;
      switch (key) {
        case "Mexico":
          this.data[3].name = "긴바지";
          break;
        case "Russia":
          this.data[3].name = "휴대용 전기장판";
          break;
        case "States":
          this.data[3].name = "110볼트 돼지코";
          break;
        case "China":
          this.data[3].name = "마스크";
          break;
        case "France":
          this.data[3].name = "운동화";
          break;
        case "UK":
          this.data[3].name = "240볼트 어댑터";
          break;
        case "Italy":
          this.data[3].name = "운동화";
          break;
        case "Germany":
          this.data[3].name = "선글라스";
          break;
      }
      this.date = this.$store.state.stday;
      this.time = "00:00";
    },
    addtodo() {
      for (let i = 0; i < this.$store.state.count; i++) {
        if (this.todoname == this.data[i].name) {
          this.k++;
        }
      }
      if (this.todoname == "") {
        alert("항목을 입력해주세요");
      } else if (this.$store.state.count > 0 && this.k == 1) {
        alert("중복된 항목입니다");
        this.todoname = "";
        this.k = 0;
      } else {
        this.data.push({
          name: this.todoname,
          check: false
        });
        this.$store.state.count++;
        console.log(this.$store.state.count);
        this.todoname = "";
      }
    },
    addtimetable() {
      if (this.doing == "") {
        alert("일정을 입력해주세요");
      } else {
        this.tt.push({
          name: this.date,
          name1: this.time,
          name3: this.doing,
          name4: this.note
        });
        this.date = "";
        this.time = "";
        this.doing = "";
        this.note = "";
        console.log("DSf");
      }
    },
    deleteThis(index) {
      this.tt.splice(index, 1);
    },
    care() {
      const key = this.$store.state.nation;
      console.log("hi");
      switch (key) {
        case "Mexico":
          this.$refs.back.style.backgroundImage = `url('${require("../assets/country/mexico.jpg")}')`;
          this.$refs.back.style.backgroundSize = "100vw 100vh";
          // this.$refs.back.style.opacity = "100vw 100vh";
          this.$refs.country.innerHTML = "멕시코";
          this.$refs.careful.innerHTML =
            "아무 의류나 허용되지 않는 관광지가 있으므로 긴바지를 챙겨가세요 일교차가 크니 여벌 옷을 준비하세요";
          break;
        case "Russia":
          this.$refs.back.style.backgroundImage = `url('${require("../assets/country/russia.webp")}')`;
          this.$refs.back.style.backgroundSize = "100vw 100vh";
          this.$refs.country.innerHTML = "러시아";
          this.$refs.careful.innerHTML =
            "겨울 옷을 챙겨가세요 유색인종에 대한 폭력을 조심하세요";
          break;
        case "States":
          this.$refs.back.style.backgroundImage = `url('${require("../assets/country/states.jpg")}')`;
          this.$refs.back.style.backgroundSize = "100vw 100vh";
          this.$refs.country.innerHTML = "미국";
          this.$refs.careful.innerHTML =
            "주마다 법규의 차이가 있으니 주의하세요 신체 접촉에 특히나 조심하세요";
          break;
        case "China":
          this.$refs.back.style.backgroundImage = `url('${require("../assets/country/china.jpg")}')`;
          this.$refs.back.style.backgroundSize = "100vw 100vh";
          this.$refs.country.innerHTML = "중국";
          this.$refs.careful.innerHTML =
            "따뜻하게 니트나 겉옷을 챙겨가세요 택시 사기를 주의하세요";
          break;
        case "France":
          this.$refs.back.style.backgroundImage = `url('${require("../assets/country/france.jpg")}')`;
          this.$refs.back.style.backgroundSize = "100vw 100vh";
          this.$refs.country.innerHTML = "프랑스";
          this.$refs.careful.innerHTML =
            "돌길이 많고 많이 걸어야 하기 때문에 편한 운동화를 챙겨가세요 겉옷을 챙겨가세요";
          break;
        case "UK":
          this.$refs.back.style.backgroundImage = `url('${require("../assets/country/UK.jpg")}')`;
          this.$refs.back.style.backgroundSize = "100vw 150vh";
          this.$refs.country.innerHTML = "영국";
          this.$refs.careful.innerHTML =
            "비가 많이 오니 우산,우비를 챙겨가세요 겉옷을 챙겨가세요 240v 어댑터를 챙겨가세요 ";
          break;
        case "Italy":
          this.$refs.back.style.backgroundImage = `url('${require("../assets/country/Italy.jpg")}')`;
          this.$refs.back.style.backgroundSize = "100vw 120vh";
          this.$refs.country.innerHTML = "이탈리아";
          this.$refs.careful.innerHTML =
            "돌길이 많고 많이 걸어야 하기 때문에 편한 운동화를 챙겨가세요";

          break;
        case "Germany":
          this.$refs.back.style.backgroundImage = `url('${require("../assets/country/germany.jpg")}')`;
          this.$refs.back.style.backgroundSize = "100vw 150vh";
          this.$refs.country.innerHTML = "독일";
          this.$refs.careful.innerHTML =
            "돌길이 많고 많이 걸어야 하기 때문에 편한 운동화를 챙겨가세요";
          break;
      }
    }
  },
  beforeMount() {
    this.setting();
  },
  mounted() {
    this.care();
  },
  data() {
    return {
      todoname: "",
      data: [
        {
          name: "여권",
          check: false
        },
        {
          name: "핸드폰 충전기",
          check: false
        },
        {
          name: "세면도구",
          check: false
        },
        {
          name: "",
          check: false
        }
      ],
      date: "",
      time: "",
      doing: "",
      note: "",
      day: 0,
      tt: [],
      k: 0
    };
  },
  props: {
    //속성 값으로 넘겨받을때 쓰는거
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");

#con {
  font-size: 1.8em;
}

#to {
  font-size: 1.8em;
}
.common {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1em;
}
.cu {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.careful {
  display: flex;
  flex-direction: column;
  width: 25vw;
  font-size: 1.2em;
  margin: 2em;
  font-weight: bold;
}

.main {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
}
* {
  font-family: "Nanum Gothic", sans-serif;
  overflow-x: hidden;
}
.b {
  width: 14vw;
  border: 1px solid black;
  margin: 0.1em;
  border-radius: 5px;
}
.createinput {
  display: flex;
  flex-direction: column;
}
.createbox {
  display: flex;
  flex-direction: row;
}
.jj {
  margin: 0 2em;
}

#right {
  margin: 2em;
}
#left {
  margin: 2em;
}

#top {
  display: flex;
  justify-content: center;
  font-size: 30px;
}
#mid {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.todoinput {
  width: 15vw;
  height: 5vh;
}
.todobutton {
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 10px 22px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
  margin: 0 1%;
  overflow: hidden;
}
.todobutton:hover {
  background-color: #5cbf2a;
}
.todobutton:active {
  position: relative;
  top: 1px;
}

td {
  text-align: center;
}
#ctime {
  margin: 1em;
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 10px 22px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
.tl {
  margin-top: 1em;
  margin-left: 2em;
  align-items: center;
}
strong {
  font-size: 2em;
}
</style>