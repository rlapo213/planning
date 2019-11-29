<template>
  <div v-if="this.v==0" class="startPage">
    <button @click="addPackageList()">넘어가기</button>
  </div>
  <div v-else class="home">
    <div id="nation">{{this.$store.state.nation}}</div>
    <div id="left">
      <div class="createbox">
        <!-- 단기간 여행 -->
        <div class="createinput">
          <input type="text" class="b" v-model="date" placeholder="여행 날짜를 입력하세요" />
          <input type="text" class="b" v-model="time" placeholder="시작 시간을 입력하세요(2시부터 -> 2)" />
          <input type="text" class="b" v-model="during" placeholder="지속 시간을 입력하세요(3시간 동안 -> 3)" />
          <input type="text" class="b" v-model="doing" placeholder="일정을 입력하세요" />
          <input type="text" class="b" v-model="note" placeholder="비고를 입력하세요" />
        </div>
        <button @click="addtimetable">시간표 생성하기</button>
      </div>
      <table border="1">
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
    addPackageList() {
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
          this.data[3].name = "240볼트 충전기";
          break;
        case "Italy":
          this.data[3].name = "운동화";
          break;
          
      }
      if(this.$store.state.nation!=""){
        this.v++;
      }
      else{
        alert("뒤로 가서 나라를 선택하세요")
      }
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
        console.log(this.data[0].name);
        this.$store.state.count++;
        console.log(this.$store.state.count);
        this.todoname = "";
      }
    },
    addtimetable() {
      this.tt.push({
        name: this.date,
        name1: this.time,
        name3: this.doing,
        name4: this.note
      });
      this.date = "";
      this.time = "";
      this.during = "";
      this.doing = "";
      this.note = "";
      console.log("DSf");
    },
    deleteThis(index) {
      this.tt.splice(index, 1);
    }
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
        },
      ],
      date: "",
      time: "",
      during: "",
      doing: "",
      note: "",
      day: 0,
      tt: [],
      k: 0,
      v:0
    };
  },
  props: {
    //속성 값으로 넘겨받을때 쓰는거
  }
};
</script>

<style scoped>
#nation {
  display: flex;
  justify-content: center;
}
.home {
  display: flex;
}
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");
* {
  font-family: "Nanum Gothic", sans-serif;
}
.b {
  width: 15vw;
}
.createinput {
  display: flex;
  flex-direction: column;
}
.createbox {
  display: flex;
  flex-direction: row;
}
#left {
  width: 65%;
}
#right {
  width: 35%;
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
}
.todobutton:hover {
  background-color: #5cbf2a;
}
.todobutton:active {
  position: relative;
  top: 1px;
}
.newdiv {
  display: flex;
}
td {
  text-align: center;
}
</style>