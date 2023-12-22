<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Task" v-model="task.name" />
    <select class="form-control" v-model="task.priority">
      <option value="" disabled selected>Select Priority</option>
      <option v-for="item in priority">{{ item }}</option>
    </select>
    <button
      class="btn btn-outline-secondary"
      type="button"
      v-if="task.id == ''"
      @click="addTask"
    >
      {{ nameButton }}
    </button>
    <button
      class="btn btn-outline-secondary"
      type="button"
      v-else
      @click="updateTask(task.id)"
    >
      {{ nameButton }}
    </button>
  </div>
  <Alert ref="alertComponent" class="mt-3" />
  <div class="card" v-if="listTakst.length > 0">
    <div class="card-body m-0 p-0">
      <table class="table m-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in listTakst">
            <td>{{ item.name }}</td>
            <td>{{ item.priority }}</td>
            <td>
              <button
                @click="deleteTask(item.id)"
                type="button"
                class="btn btn-sm btn-danger"
              >
                <i class="fa fa-times"></i></button
              ><button
                @click="getOneTask(item.id)"
                type="button"
                class="btn btn-sm btn-warning"
              >
                <i class="fa fa-pen"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import "animate.css";
import Alert from "./Alert.vue";
import useEnv from "../composable/useEnv.js";
const { apiUrl } = useEnv();
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
const listTakst = ref([]);
const alertComponent = ref(null);
const priority = ref(["High", "Medium", "Low"]);
const nameButton = ref("Add");
const task = reactive({
  name: "",
  priority: "",
  id: "",
});
const addTask = async () => {
  if (task.name === "" || task.priority === "") {
    alertComponent.value.showAlert("error", "Empty Inputs");
  } else {
    const response = await axios.post(apiUrl + "/task", task);
    await getTasks();
    task.name = "";
    task.priority = "";
    alertComponent.value.showAlert("success", "Task Added");
  }
};
const getTasks = async () => {
  const result = await axios.get(apiUrl + "/tasks");
  listTakst.value = result.data;
};
onMounted(async () => {
  await getTasks();
});
const deleteTask = async (id) => {
  const response = await axios.delete(apiUrl + "/task/" + id);
  await getTasks();
  alertComponent.value.showAlert("success", "Deleted Added");
};
const getOneTask = async (id) => {
  const { data } = await axios.get(apiUrl + "/task/" + id);
  task.id = data[0].id;
  task.name = data[0].name;
  task.priority = data[0].priority;
  nameButton.value = "Update";
};
const updateTask = async (id) => {
  nameButton.value = "Update";
  const { data } = await axios.patch(apiUrl + "/task/" + id, { task });
  task.id = "";
  task.name = "";
  task.priority = "";
  alertComponent.value.showAlert("success", "Task Updated");
  nameButton.value = "Add";
};
</script>

<style scoped>
</style>
