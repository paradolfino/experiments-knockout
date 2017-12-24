function viewModel() {
    const self = this;
    localStorage.clear();
    if (!localStorage){
        self.todos = ko.observableArray([]);
    } else {
        
        self.todos = ko.observableArray(JSON.parse(localStorage.getItem('todos')));
    }
    
    //basic functions
    self.addTD = function() {
        self.todos.push({ 
            item: $('#add').val(),
            state: 'new',
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
        todo.state = 'started';
    };
    
    self.doneTD = function(todo) {
        todo.state = 'done';
        todo.done = true;
        self.history.push({
            item: todo.item,
            createdAt: null,
            startedAt: null,
            completedAt: null
        });
        
        self.save();
        self.saveHistory();
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