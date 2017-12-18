

function viewModel() {
    const self = this;
    self.htmlString = ko.observable("<h1>This is an html heading</h1><p>This is a paragraph.</p>");
}

ko.applyBindings(new viewModel());