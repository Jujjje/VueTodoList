<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useFolderStore } from "src/entities/folder";
import { TaskEntity, useTasksStore } from "src/entities/task";
import { AddTaskFeature } from "src/features/addTask";
import { PencilIcon } from "src/shared/assets";
import { computed, ref, watchEffect } from "vue";

const store = useFolderStore();
const { renameFolder } = store;
const { folders, activeFolder } = storeToRefs(store);
const taskStore = useTasksStore();
const { tasks } = storeToRefs(taskStore);
let changedFolder = ref<string>("");
let isChange = ref(false);
const input = ref<any>(null);
const neededTasks = computed(() => {
  return activeFolder.value === 0
    ? tasks.value
    : tasks.value.filter(
        (i) => i.folderId === folders.value[activeFolder.value].title
      );
});
watchEffect(() => {
  if (input.value) {
    input.value.focus();
  }
});

function onInput(newTitle: string) {
  renameFolder(newTitle);
  isChange.value = false;
  changedFolder.value = "";
}
</script>
<template>
  <div class="w-full p-14">
    <div class="flex flex-row items-center gap-x-4">
      <input
        type="text"
        ref="input"
        placeholder="Новое имя папки"
        class="text-[#42B883] text-[36px] font-bold"
        v-model="changedFolder"
        v-on:change="onInput(changedFolder)"
        v-if="isChange"
      />
      <p class="text-[#42B883] text-[36px] font-bold" v-else>
        {{ folders[activeFolder].title }}
      </p>
      <PencilIcon
        v-if="activeFolder"
        class="size-5"
        @click="isChange = !isChange"
      />
    </div>
    <div class="h-[2px] bg-[#F2F2F2] w-full mt-5 mb-8"></div>
    <div class="flex flex-col gap-y-5">
      <TaskEntity
        :task="task"
        :i="i"
        :key="i"
        v-for="(task, i) in neededTasks"
      />
      <AddTaskFeature
        :folderId="folders[activeFolder].title"
        v-if="activeFolder !== 0"
      />
    </div>
  </div>
</template>
