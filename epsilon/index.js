function viewModel() {
    const self = this;
    if (!localStorage){
        self.todos = ko.observableArray([]);
    } else {
        console.log(localStorage.getItem('todos'));
        self.todos = ko.observableArray([]);
    }
    
    self.addTD = function() {
        self.todos.push({ item: $('#add').val()});
        saveState();
    };
    self.remTD = function() {
        self.todos.remove(this);
        saveState();
    };
}

function saveState() {
    localStorage.setItem('todos',viewModel().todos);
}

ko.applyBindings(new viewModel());