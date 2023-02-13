<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'g1', pull: 'clone', put: false }"
        :clone="cloneTask"
        @change="log"
      >
        <div class="list-group-item" v-for="element in list1" :key="element.id">
          {{ element.name }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>

        <nested-task :tasks="list2" />

      <!-- <draggable
        class="dragArea list-group"
        :list="list2"
        group="task"
        @change="log"
      >
        <div class="list-group-item" v-for="element in list2" :key="element.id">
          {{ element.name }}
        </div>
      </draggable> -->


    </div>

    <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
  </div>
</template>

<script lang="ts">
import draggable from "vuedraggable";
import nestedTask from "./infra/NestedTask.vue";
import Task from "@/types/Task";

import { defineComponent } from "vue";

let idGlobal = 1;
export default defineComponent({
  name: "robot-designer",
  display: "Robot Designer",
  order: 3,
  components: {
    draggable,
    nestedTask
  },
  data() {
    return {
      list1: [
        new Task(1, "for", "For"),
        new Task(1, "if", "If"),
        new Task(1, "task", "Task"),
      ],
      list2: [
        new Task(1, "for", "For", 
          [ new Task(1, "if", "If") ]
        )
      ]
    };
  },
  methods: {
    log: function(evt: any) {
      window.console.log(evt);
    },
    cloneTask(item: Task) {
      return new Task(
        idGlobal++,
        `${item.type} ${item.id}`,
        item.type
      );
    }
  }
})
</script>
<style scoped></style>
