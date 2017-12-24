//native templates

var viewModel = {
    categories: ko.observableArray([
        { name: 'Technology', subcategories: ['Programming', 'Hardware', 'Web Development']},
        { name: 'Business', subcategories: ['Finance', 'Marketing', 'Stocks']},
        { name: 'Food', subcategories: ['Restaurang', 'Katerer', 'Market']}
    ])
}

ko.applyBindings(viewModel);