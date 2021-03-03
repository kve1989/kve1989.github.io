const App = {
  data() {
    return {
      tasks: [],
      textNewTask: "",
      customPlaceholder: "",
    };
  },
  methods: {
    getTextNewTask(e) {
      this.textNewTask = e.target.value;
    },
    addNewTask() {
      if (this.textNewTask.length === 0) {
        this.customPlaceholder = "Введите текст задачи...";
        return;
      }
      this.tasks.push(this.textNewTask);
      this.textNewTask = "";
    },
    pressEnterToAddTask() {
      this.addNewTask();
    },
    clearListsTasks() {
      this.tasks = this.tasks.splice(0, -1);
    },
  },
  computed: {
    totalCountTasks() {
      return this.tasks.length;
    },
  },
};

Vue.createApp(App).mount("#app");
