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
};

ko.bindingHandlers.slideVisible = {
    update: function(element, valueAccessor, allBindings) {
        // First get the latest data that we're bound to
        var value = valueAccessor();
 
        // Next, whether or not the supplied model property is observable, get its current value
        var valueUnwrapped = ko.unwrap(value);
 
        // Grab some more data from another binding property
        var duration = allBindings.get('slideDuration') || 400; // 400ms is default duration unless otherwise specified
 
        // Now manipulate the DOM element
        if (valueUnwrapped == true)
            $(element).slideDown(duration); // Make the element visible
        else
            $(element).slideUp(duration);   // Make the element invisible
    }
};

function viewModel() {
    self = this;
    self.color = ko.observable();
    self.msg = ko.observable("A text fade in");
    self.giftWrap = ko.observable(true);
}

ko.applyBindings(new viewModel());