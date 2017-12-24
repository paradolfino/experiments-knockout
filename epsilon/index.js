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
            item: $('#add').val(),
            state: 'new',
            created: date.toLocaleString(),
            started: null,
            completed: null,
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
        todo.started = date.toLocaleString();
    };
    
    self.doneTD = function(todo) {
        date = new Date();
        todo.state = 'done';
        todo.done = true;
        todo.completed = date.toLocaleString();
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