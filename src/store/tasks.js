const { makeAutoObservable } = require("mobx");

class Tasks {
  backlog = [];
  ready = [];
  inProgress = [];
  finished = [];

  taskName = "";

  constructor() {
    makeAutoObservable(this);
  }

  addCard(name) {
    if (name.trim() === "") {
      return (this.taskName = "");
    }

    let nextId =
      this.backlog.length +
      this.ready.length +
      this.inProgress.length +
      this.finished.length +
      1;
    let newCard = {
      id: nextId,
      category: "backlog",
      name: name.trim(),
      description: "There is no description",
    };
    this.backlog.push(newCard);
    localStorage.setItem(`${nextId}`, JSON.stringify(newCard));
    this.taskName = "";
  }

  setTaskName(task) {
    this.taskName = task;
  }

  chooseCard(el, title, addTo, deleteFrom) {
    el.category = title
      .toLowerCase()
      .replace(/[^a-zA-Z]+(.)/g, (m, chr) => chr.toUpperCase());
    addTo.push(el);
    localStorage.setItem(
      `${el.id}`,
      JSON.stringify({
        id: el.id,
        category: el.category,
        name: el.name,
        description: el.description,
      })
    );
    for (var i = 0; i < deleteFrom.length; i++) {
      if (deleteFrom[i].id === el.id) {
        deleteFrom.splice(i, 1);
        i--;
      }
    }
  }
}

export default new Tasks();
