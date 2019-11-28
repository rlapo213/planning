<template>
    <tr>
      <td class="n">{{timetables.name}}</td>
      <td class="n">{{timetables.name1}}</td>
      <td class="n">{{timetables.name3}}</td>
      <td class="n">{{timetables.name4}}</td>
      <td class="n" @click="$emit('click',$event)"> X</td>
    </tr>
</template>


<script>
export default {
  props: {
    timetables: Object,
  },
  methods: {
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
  background-color: #44c767;
  border-radius: 10px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 1% 3%;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
button:hover {
  background-color: #5cbf2a;
}
</style>



