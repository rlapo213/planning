<template>
    <tr>
      <td class="n">{{timetables.name}}</td>
      <td class="n">{{timetables.name1}}</td>
      <td class="n">{{timetables.name3}}</td>
      <td class="n">{{timetables.name4}}</td>
      <td class="n" id="delete" @click="$emit('click',$event)"> X</td>
    </tr>
</template>


<script>
export default {
  props: {
    timetables: Object,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap");
* {
  font-family: "Nanum Gothic", sans-serif;
}
#delete{
  cursor: pointer;
}

</style>



