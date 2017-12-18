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
            state: 'new'
        });
        self.save();
    };
    self.remTD = function(todo) {
        self.todos.remove(todo);
        self.save();
    };
    
    //additional option functions
    self.startTD = function() {
        
    };

    //database
    self.save = function() {
        localStorage.setItem('todos',JSON.stringify(self.todos()));
        let curState = JSON.stringify(localStorage.getItem('todos'));
    }
}

let dataLayer = {
  //intention to add stuff  
};


ko.applyBindings(new viewModel());