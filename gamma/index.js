function viewModel() {
    const self = this;
    self.users = ko.observableArray([
        {name: 'Pols'},
        {name: 'Flem'},
        {name: 'Mike'}
    ]);
}