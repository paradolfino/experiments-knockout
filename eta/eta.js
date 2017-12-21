//native templates

function viewModel() {
    self = this;
    self.categories = ko.observableArray([
        { name: 'Technology', subcategories: ['Programming', 'Hardware', 'Web Development']},
        { name: 'Business', subcategories: ['Finance', 'Marketing', 'Stocks']},
        { name: 'Food', subcategories: ['Restaurang', 'Katerer', 'Market']}
    ]);
}

ko.applyBindings(new viewModel());