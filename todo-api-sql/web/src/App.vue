<script setup>
import useEnv from "./composable/useEnv.js";
import Todo from "./components/Todo.vue";
const { apiUrl } = useEnv();
console.log(apiUrl);
</script>
<template>
  <div class="mt-5 d-flex justify-content-center align-items-center row">
    <div class="col-sm-12 col-md-12 text-center">
      <h1 class="fw-bold">TODO-APP</h1>
    </div>
    <div class="col-sm-12 col-md-4 text-center mt-3">
      <Todo />
    </div>
  </div>
</template>
