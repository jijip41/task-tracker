export default class TaskPresenter {
  constructor(tasks, maxTasks) {
    this.tasks = tasks;
    this.maxTasks = maxTasks;
  }
  getTasks() {
    return this.tasks;
  }

  increment(task, update) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === task.id) {
        return { ...item, count: task.count + 1 };
      }
      return item;
    });
    update(this.tasks);
  }

  decrement(task, update) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === task.id) {
        return item.count > 0
          ? { ...item, count: item.count - 1 }
          : { ...item };
      }
      return item;
    });
    update(this.tasks);
  }

  delete(task, update) {
    this.tasks = this.tasks.filter((item) => {
      return item.id !== task.id;
    });
    update(this.tasks);
  }

  add(name, update) {
    if (this.tasks.length === this.maxTasks) {
      throw new Error(`Tasks can't exceed ${this.maxTasks}`);
    }
    this.tasks = [...this.tasks, { name, id: this.tasks.length + 1, count: 0 }];
    update(this.tasks);
  }

  deleteAll(update) {
    this.tasks = [];
    update(this.tasks);
  }

  reset(update) {
    this.tasks = this.tasks.map((item) => {
      return { ...item, count: 0 };
    });
    update(this.tasks);
  }
}
