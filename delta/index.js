

function viewModel() {
    const self = this;
    self.htmlString("<h1>Lol</h1>");
    self.amount = ko.observable(11);
}

ko.applyBindings(new viewModel());