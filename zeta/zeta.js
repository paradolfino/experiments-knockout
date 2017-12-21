ko.bindingHandlers.changeColor = {
    update: function(element, valueAccessor) {
        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        $(element).css("color", valueUnwrapped);
    }
};

ko.bindingHandlers.textFadeIn = { //wrapper binding
    update: function(element, valueAccessor) {
        $(element).hide();
        ko.bindingHandlers.text.update(element, valueAccessor);
        $(element).fadeIn();
    }
}

function viewModel() {
    self = this;
    self.color = ko.observable();
    self.msg = ko.observable("A text fade in");
}

ko.applyBindings(new viewModel());