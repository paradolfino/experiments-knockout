function viewModel() {
    const self = this;
    self.users = ko.observableArray([
        {name: 'Pols'},
        {name: 'Flem'},
        {name: 'Mike'}
    ]);

    self.addUser = () => {
        self.users.push({name: $('#newUser').val()});
    }
}

ko.applyBindings(new viewModel());