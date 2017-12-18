/*function viewModelText() {
    const self = this;
    self.name = ko.observable('Broom');
    self.job = ko.observable('Cleaner');
}*/

function viewModelVisible() {
    const self = this;
    self.showMessage = ko.observable(true);
    self.hideMessage = function() {
        self.showMessage(false);
    }
}

//ko.applyBindings(new viewModelText());
ko.applyBindings(new viewModelVisible());