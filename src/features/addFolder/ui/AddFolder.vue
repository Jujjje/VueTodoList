<script setup lang="ts">
import { useFolderStore } from "src/entities/folder";
import { PlusIcon, XRoundedICon } from "src/shared/assets";
import { ref } from "vue";

let isOpen = ref(false);
let newFolderTitle = ref("");
const store = useFolderStore();
const { addFolder } = store;
</script>
<template>
  <div class="mt-9 px-3 relative">
    <div class="flex items-center gap-x-[10px] h-9" @click="isOpen = true">
      <PlusIcon />
      <p class="text-[#767676]">Добавить папку</p>
    </div>
    <div
      class="absolute w-[235px] h-[104px] bg-white shadow-lg rounded-[10px] mt-1 p-4 flex flex-col justify-between"
      v-if="isOpen"
    >
      <input
        type="text"
        class="w-[200px] h-8 border border-[#EFEFEF] rounded-[4px] flex pb-[4px] pl-[11px]"
        placeholder="Название папки"
        v-model="newFolderTitle"
      />
      <button
        class="w-[200px] h-8 bg-[#4DD599] rounded-[4px] flex justify-center items-center text-white"
        @click="
          () => {
            addFolder(newFolderTitle);
            newFolderTitle = '';
          }
        "
      >
        Добавить
      </button>
      <XRoundedICon
        class="absolute right-[-8px] top-[-8px]"
        @click="isOpen = false"
      />
    </div>
  </div>
</template>
