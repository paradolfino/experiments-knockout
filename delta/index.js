

function viewModel() {
    const self = this;
    self.htmlString = ko.observable("<h1>Lol</h1>");
    self.amount = ko.observable(11);
    self.url = ko.observable("http://www.google.com");
    self.title = ko.observable("Google");
}

ko.applyBindings(new viewModel());