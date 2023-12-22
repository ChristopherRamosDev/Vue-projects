<template>
  <div
    v-if="show"
    class="animate__animated"
    :class="animatedShow ? 'animate__fadeIn' : 'animate__fadeOut'"
  >
    <div
      class="alert"
      :class="type === 'error' ? 'alert-danger' : 'alert-success'"
      role="alert"
    >
      {{ text }}
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted, defineEmits } from "vue";
const tipo = ref("");
const text = ref("");
const show = ref(false);
const time = ref(2000);
const animatedShow = ref(true);
const type = ref("");
const showAlert = (tipo, texto) => {
  type.value = tipo;
  text.value = texto;
  time.value = 2000;
  console.log(type.value);
  animatedShow.value = true;
  show.value = true;
  const vue = this;
  setTimeout(() => {
    animatedShow.value = false;
    setTimeout(() => {
      show.value = false;
    }, 550);
  }, time.value);
};

defineExpose({ showAlert });
</script>

<style scoped></style>
