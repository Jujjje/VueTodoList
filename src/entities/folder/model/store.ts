import { defineStore } from "pinia";
import { ref, watch } from "vue";
export interface IFolder {
  title: string;
}
export const useFolderStore = defineStore("folder", () => {
  let folders = ref<IFolder[]>(
    localStorage.getItem("folders") == null
      ? [
          {
            title: "Все задачи",
          },
          {
            title: "Папка по умолчанию",
          },
        ]
      : JSON.parse(localStorage.folders)._value
  );

  let activeFolder = ref(1);

  function setActive(id: number) {
    activeFolder.value = id;
  }

  function addFolder(title: string) {
    title === "" ? (title = "Папка " + folders.value.length) : title;
    folders.value.push({
      title: title,
    });
  }

  function deleteFolder(id: number) {
    setActive(0);
    folders.value.splice(id, 1);
  }

  function renameFolder(newTitle: string) {
    folders.value[activeFolder.value].title = newTitle;
  }

  watch(
    () => folders,
    (state) => {
      localStorage.setItem("folders", JSON.stringify(state));
    },
    { deep: true }
  );

  return {
    folders,
    addFolder,
    deleteFolder,
    setActive,
    activeFolder,
    renameFolder,
  };
});
