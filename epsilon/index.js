function viewModel() {
    const self = this;
    let date;

    localStorage.clear();
    if (!localStorage){
        self.todos = ko.observableArray([]);
    } else {
        
        self.todos = ko.observableArray(JSON.parse(localStorage.getItem('todos')));
    }
    
    //basic functions
    self.addTD = function() {
        date = new Date();
        self.todos.push({ 
            item: ko.observable($('#add').val()),
            state: 'new',
            created: date.toLocaleString(),
            started: ko.observable(''),
            completed: ko.observable(''),
            done: false
        });
        self.save();
    };
    self.remTD = function(todo) {
        self.todos.remove(todo);
        self.save();
    };
    
    //additional option functions
    self.startTD = function(todo) {
        date = new Date();
        todo.state = 'started';
        todo.started(`${date.getHours()}:${date.getMinutes()}`);
    };
    
    self.doneTD = function(todo) {
        date = new Date();
        todo.state = 'done';
        todo.done = true;
        todo.item(todo.item+" "+"(COMPLETED)")
        todo.completed(`${date.getHours()}:${date.getMinutes()}`);
        $('#todo_'+todo.item).css({
            'background': 'gray',
            'color': 'red'
        });
        self.save();
    };
    

    //database
    self.save = function() {
        localStorage.setItem('todos',JSON.stringify(self.todos()));
    }

}

let dataLayer = {
  //intention to add stuff  
};


ko.applyBindings(new viewModel());