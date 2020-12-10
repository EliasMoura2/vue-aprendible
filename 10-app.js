// Vue.component('user', {
//   template: '<h1>Elias</h1>'
// })
// Vue.component('user', {
//   template: '<h1><slot></slot></h1>'
// })

// Propiedades
// Vue.component('user', {
//     props: ['name', 'lastName'],
//     template: '<h1>{{ name }} + {{ lastName }} </h1>'
//   })

Vue.component('user', {
      props: ['name', 'lastName'],
      data: function(){
        return{
          app: {
            name: 'Aprendible'
          }
        }
      },
      template: `<div>
                  <h1>Usuario de: {{ app.name }}</h1>
                  <h2>Nombre: {{ name }} {{ lastName }}</h2>
                  <input v-model="name" />
                  <input v-model="lastName" />
                  <input v-model="app.name" />
                </div>`
    })

var app = new Vue({
  el:'#app',
  data:{

  },
  methods:{

  },
  computed:{

  }
})