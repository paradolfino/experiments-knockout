function viewModel() {
    var self = this;
    self.firstName = ko.observable("Matt");
    self.lastName = ko.observable("Daemon");
    self.fullName = ko.computed(function(){
        self.firstName + " " + self.lastName;
    });
}

ko.applyBindings(new viewModel());