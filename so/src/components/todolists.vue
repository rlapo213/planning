<template>
  <div>
    <div
      class="todo" :class="{'todo-check':todo.check}" v-for="(todo,idx) in todolists" :key="todo.name">
      <button @click="checkThis(idx)">check</button>
      <h1 class="n">{{todo.name}}</h1>
      <button @click="deleteThis(idx)">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    todolists: Array
  },
  methods: {
    deleteThis(index) {
      this.todolists.splice(index, 1);
      this.$store.state.count-=1;
    },
    checkThis(index) {
      this.todolists[index].check = true;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");
* {
  font-family: "Nanum Gothic", sans-serif;
}
.todo {
  background-color: whitesmoke;
  display: flex;
  font-size: 8px;
  justify-content: space-between;
  border-radius: 28px;
  margin: 0 5%;
}
.todo-check > h1 {
  text-decoration: line-through;
}
.n {
  padding: 5px;
}
button {
  justify-content: center;
  background-color: #44c767;
  border-radius: 10px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
button:hover {
  background-color: #5cbf2a;
}
/*
check 선택하고 선택 해제 가능.
테이블 오버플로우는 글자 크기 줄이기.
테이블 시간받아서 테이블 만들기
테이블 공백처리 하기
*/
</style>



