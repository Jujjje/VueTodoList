<script setup lang="ts">
import { IFolder, useFolderStore } from "../model/store";
import { XIcon, AllFolders } from "src/shared/assets";
interface IProps {
  folder: IFolder;
  i: number;
  isActive: boolean;
}
const store = useFolderStore();
const { deleteFolder } = store;
const props = defineProps<IProps>();

const defaultStyle =
  "w-full h-[45px] flex items-center gap-x-[10px] first:mb-5 p-3 relative ";
const activeStyle =
  "w-full h-[45px] flex items-center gap-x-[10px] bg-white first:mb-5 p-3 relative ";
</script>
<template>
  <div :class="isActive ? activeStyle : defaultStyle">
    <AllFolders v-if="i === 0" />
    <div class="bg-[#42B883] size-3 rounded-full" v-else></div>
    <p class="text-[20px] truncate w-[120px]">{{ folder.title }}</p>
    <XIcon
      class="absolute right-3"
      v-if="isActive && i !== 0"
      @click="deleteFolder(i)"
    />
  </div>
</template>
