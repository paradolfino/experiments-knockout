function viewModel() {
    const self = this;
    self.users = ko.observableArray([
        {name: 'Pols'},
        {name: 'Flem'},
        {name: 'Mike'}
    ]);

    self.addUser = function() {
        self.users.push({name: $('#newUser').val()});
    }

    self.removeUser = function() {
        self.users.remove(this);
        console.log("remove");
    }
}

ko.applyBindings(new viewModel());