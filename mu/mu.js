ko.components.register('newsletter-widget', {
    viewModel: function(params) {
        this.email = ko.observable();
        this.showMessage = ko.observable(false);
        this.submitForm = function() {
            this.showMessage(true);
        }
    },
    template: 
    '<h3>Subscribe to our newsletter</h3>\
    <form data-bind="submit:submitForm">\
        <input data-bind="value: email"/>\
        <button type="submit">Submit</button>\
    </form>\
    <p data-bind="visible: showMessage">Thanks For Subscribing: <strong><span data-bind="text: email"</span></strong></p>'
});

ko.applyBindings();