var viewModel = {
    categories: ko.observableArray([
        {name: 'Technology'},
        {name: 'Business'}
    ])
}

viewModel.categoriesAlt = ko.computed(function(){
    return this.categories.union([
        {name: 'Food'},
        {name: 'Construction'}
    ]);
});

$(function(){
    ko.applyBindings(viewModel);
});

