<template>
  <div class="home">
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
          <timetable :timetable="timetable" @click="deleteThis(idx)" class="timet" v-for="(timetable,idx) in tt" :key="idx"></timetable>
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
      <todolist :todolist="data" />
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
    addtodo() {
      this.data.push({
        name: this.todoname,
        check: false
      });
      this.todoname = "";
    },
    addtimetable() {
      this.tt.push({
        name: this.date,
        name1: this.time,
        name3: this.doing,
        name4: this.note,
      });
      this.date = "";
      this.time = "";
      this.during = "";
      this.doing = "";
      this.note = "";
      console.log("DSf")
    },
    deleteThis(index) {
      this.tt.splice(index, 1);
    }
  },
  data() {
    return {
      todoname: "",
      data: [],
      date: "",
      time: "",
      during: "",
      doing: "",
      note: "",
      day: 0,
      tt: [],
    };
  },
  props:{
    //속성 값으로 넘겨받을때 쓰는거
  }
};
</script>

<style scoped>
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