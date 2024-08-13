<script setup lang="ts">
import { storeToRefs } from "pinia";
import { FolderEntity, useFolderStore } from "src/entities/folder";
import { AddFolder } from "src/features/addFolder";
import { ref } from "vue";

const store = useFolderStore();
const { setActive } = store;
const { folders } = storeToRefs(store);

let activeFolder = ref(1);
</script>
<template>
  <div class="bg-[#F4F6F8] w-[20vw]">
    <div class="mx-5 my-14 flex flex-col">
      <FolderEntity
        v-for="(folder, i) in folders"
        :key="i"
        :folder="folder"
        @click="
          () => {
            activeFolder = i;
            setActive(i);
          }
        "
        :i="i"
        :isActive="activeFolder === i"
      />
      <AddFolder />
    </div>
  </div>
</template>
