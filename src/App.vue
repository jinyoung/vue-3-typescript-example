<template>
  <div id="app">
    <robot-designer></robot-designer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import TutorialsList from "./components/TutorialsList.vue";
import RobotDesigner from "./components/RobotDesigner.vue";

export default defineComponent({
  components: { 
  //  TutorialsList, 
    RobotDesigner
  },
  name: "App",
});
</script>
