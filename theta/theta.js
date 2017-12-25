var viewModel = {
    categories: ko.observableArray([
        {name: 'Technology'},
        {name: 'Business'}
    ])
}

$(function(){
    ko.applyBindings(viewModel);
});

