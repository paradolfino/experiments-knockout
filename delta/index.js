

function viewModel() {
    const self = this;
    self.htmlString = ko.observable("<h1>Lol</h1>");
    self.amount = ko.observable(11);
}

ko.applyBindings(new viewModel());