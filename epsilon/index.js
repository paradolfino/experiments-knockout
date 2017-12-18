function viewModel() {
    const self = this;
    //localStorage.clear();
    if (!localStorage){
        self.todos = ko.observableArray([]);
    } else {
        self.todos = ko.observableArray(JSON.parse(localStorage.getItem('todos')));
    }
    self.addTD = function() {
        self.todos.push({ item: $('#add').val()});
        self.save();
    };
    self.remTD = function(todo) {
        self.todos.remove(todo);
        self.save();
    };

    self.save = function() {
        localStorage.setItem('todos',JSON.stringify(self.todos()));
        let curState = JSON.stringify(localStorage.getItem('todos'));
    }
}


ko.applyBindings(new viewModel());