var app = new Vue({
    el : "#app",
    data : {
        task: "" ,
        todo: [
            
          ],
          nextTodoId: -1
    },
    methods: {
        addTask: function(){
           
            this.todo.push({
                id: this.nextTodoId++,
                title : "Learn " + this.task
            })
            this.task= ''
        }
    }
})