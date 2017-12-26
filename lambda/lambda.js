function viewModel() {
    var self = this;
    self.firstName = ko.observable("Matt");
    self.lastName = ko.observable("Daemon");
    /*self.fullName = ko.computed(function(){
        return self.firstName() + " " + self.lastName();
    });*/
    self.fullName = ko.computed({
        read: function() {
            return self.firstName() + " " + self.lastName();
        },
        write: function(val) {
            var value = val.split(' ');
        }
    });
}

ko.applyBindings(new viewModel());