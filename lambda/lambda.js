function viewModel() {
    var self = this;
    self.firstName = ko.observable("Matt");
    self.lastName = ko.observable("Daemon");
    self.fullName = ko.computed(function(){
        return self.firstName + " " + self.lastName;
    });
}