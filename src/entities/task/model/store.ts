import { defineStore } from "pinia";
import { ref, watch } from "vue";
export interface ITask {
  title: string;
  isDone: boolean;
  folderId: string;
}
export const useTasksStore = defineStore("tasks", () => {
  let tasks = ref<ITask[]>(
    localStorage.getItem("tasks") == null
      ? []
      : JSON.parse(localStorage.tasks)._value
  );

  function changeDoneStatus(id: number) {
    tasks.value[id].isDone = !tasks.value[id].isDone;
  }

  function addTask(newTask: ITask) {
    tasks.value.push(newTask);
  }

  watch(
    () => tasks,
    (state) => {
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    { deep: true }
  );
  return { tasks, changeDoneStatus, addTask };
});
