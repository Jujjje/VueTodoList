<script setup lang="ts">
import { MarkIsDone, XIcon } from "src/shared/assets";
import { ITask, useTasksStore } from "../model/store";

interface IProps {
  task: ITask;
  i: number;
}
const props = defineProps<IProps>();

const store = useTasksStore();
const { changeDoneStatus, deleteTask } = store;
</script>
<template>
  <div class="flex items-center gap-x-[15px] relative">
    <MarkIsDone v-if="task.isDone" @click="changeDoneStatus(i)" />
    <div
      class="size-[20px] border-[#E8E8E8] border-[2px] rounded-full"
      @click="changeDoneStatus(i)"
      v-else
    ></div>
    <div class="text-[20px] relative top-[-2px]">{{ task.title }}</div>
    <XIcon class="absolute right-0" @click="deleteTask(i)" />
  </div>
</template>
