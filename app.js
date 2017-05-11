
let taskForm = {
  template: '#template-task-form',
  props: [
    'task',
    'on-submit',
  ],
  methods: {
    form_submit: function(event) {
      if(!this.task.name) {
        return;
      }

      this.onSbubmit(event, this.task);
    },
  },
};

let taskItem = {
  template: '#template-task-item',
  props: [
    'task'
  ],
  methods: {
    edit_click: function(event) {
      let newName = window.prompt('Task Name', this.task.name);
      if (typeof newName === 'string') {
        this.task.name = newName;
      }
    },
  },
};

window.app = new vue({
  el: '#app',
  components: {
    taskForm: taskForm,
    taskItem: taskItem,
  },
  data: {
    newTask: { finished: false, name: ''},
    tasks: [
      { finished: false, name: 'Buy milk 2L'},
      { finished: false, name: 'Call to Alice'},
      { finished: false, name: 'Buy a book'},
    ],
  },
  computed: {
  },
  methods: {
    newTask_submit: function(event) {
      this.tasks.unfhift(this.newTask);
      this.newTask = { finished: false, name: ''};
    },

    delete_click: fucntion(event) {
      this.tasks = this.tasks.filter(v=>!v.finished);
    },
  },
});
