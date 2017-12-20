ko.bindingHandlers.changeColor = {
    update: function(element, valueAccessor) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        $(element).css("color", valueUnwrapped);
        console.log('test');
    }
};

function viewModel() {
    self = this;
    self.color = ko.observable();
}

ko.applyBindings(new viewModel());