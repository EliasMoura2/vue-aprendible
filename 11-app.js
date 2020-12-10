Vue.component('tasks',{
  template: `<div>  
    <h1>Todo list</h1>
    <h4 v-if="completed">Tareas completas : {{ completed }}</h4>
    <h4 v-if="incompleted">Tareas incompletas : {{ incompleted }}</h4>

    <ul>
      <li is="task" v-for="task in tasks" :task="task"></li>
      <li class="form-inline">
        <input v-on:keyup.enter="add()" v-model="newTask" type="text" class="form-control">
      </li>
    </ul>
  </div>`,
  data: function(){
    return {
      newTask: '',
      tasks: [
        { title: 'Learn HTML5', completed: true},
        { title: 'Learn CSS3', completed: false},
        { title: 'Learn JS', completed: true }
      ]
    }
  },
    computed: {
      reverse: function() {
        return this.newTask.split('').reverse().join('')
      },
      completed: function(){
        return this.tasks.filter(function(task){
          return task.completed
        }).length
      },
      incompleted: function(){
        // console.log('trigger incompletedTask')
        return this.tasks.filter(function(task){
          return !task.completed
        }).length
      }
    },
    methods: {
      add: function(){
        if(this.newTask.length <= 1 ) return alert('Ingrese una tarea');
        this.tasks.push({
          title: this.newTask,
          completed: false
        });
        this.newTask = ""
      }
    }
})

Vue.component('task',{
  props: ['task'],
  template: `
  <li>
  <span v-text="task.title"></span>
  <span @click="Complete()" :class="Classes"></span> 
  </li>`,
  methods:{
    Complete: function(){
      this.task.completed = ! this.task.completed
    }
  },
  computed:{
    Classes: function (){
      return ['far', this.task.completed ? 'fa-check-square' : 'fa-square']
    }
  }
})

var app = new Vue({
  el:'#app'
})