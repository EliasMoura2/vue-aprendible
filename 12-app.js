Vue.component('tasks',{
  template: `<section class="todoapp">  
    <header class="header">
      <h1>Todo</h1>
      <input v-on:keyup.enter="add()" v-model="newTask" type="text" class="new-todo">
    </header>
    <section>
      <ul class="todo-list">
        <li class="todo" is="task" v-for="task in tasks" :task="task"></li>
      </ul>
    </section>
    <footer class="footer">
      <span class="todo-count">Completas : {{ completed }}</span>
      <span class="todo-count">Incompletas : {{ incompleted }}</span>
    </footer>

  </section>`,
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
  <li :class="Classes">
  <div class="view">
    <input type="checkbox" class="toggle" v-model="task.completed">
    <label v-text="task.title"></label>
  </div>
  </li>` ,
  computed:{
    Classes: function (){
      return { completed: this.task.completed }
    }
  }
})

var app = new Vue({
  el:'#app'
})