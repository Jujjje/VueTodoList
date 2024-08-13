<script setup lang="ts">
import { useTasksStore } from "src/entities/task";
import { PlusIcon } from "src/shared/assets";
import { ref } from "vue";
interface IProps {
  folderId: string;
}
const isOpen = ref(false);
const newTask = ref("");
const props = defineProps<IProps>();
const store = useTasksStore();
const { addTask } = store;
function onClickAddTask() {
  addTask({ title: newTask.value, isDone: false, folderId: props.folderId });
  newTask.value = "";
  isOpen.value = false;
}
</script>
<template>
  <div class="flex flex-col gap-y-4" v-if="isOpen">
    <input
      type="text"
      placeholder="Текст задачи"
      class="border-[2px] border-[#EFEFEF] min-w-[70%] h-[38px] rounded-[4px] px-3 py-2"
      v-model="newTask"
    />
    <div class="flex gap-x-2">
      <button
        class="h-[34px] w-[145px] rounded-[4px] bg-[#4DD599] text-white"
        @click="onClickAddTask"
      >
        Добавить задачу
      </button>
      <button
        class="h-[34px] w-[90px] bg-[#F4F6F8] text-[#9C9C9C] rounded-[4px]"
        @click="isOpen = false"
      >
        Отмена
      </button>
    </div>
  </div>
  <div class="" v-else @click="isOpen = !isOpen">
    <div class="flex items-center gap-x-5">
      <PlusIcon />
      <p class="text-[#B4B4B4] text-[16px]">Добавить задачу</p>
    </div>
  </div>
</template>
