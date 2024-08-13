<script setup lang="ts">
import { FolderWidget } from "src/widgets/folder";
import { TasksWidget } from "src/widgets/tasks";
</script>
<template>
  <div class="flex flex-row min-h-[100vh]">
    <FolderWidget />
    <TasksWidget />
  </div>
</template>
