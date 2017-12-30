function getGoals() {
    $.get('http://localhost:3000/goals', function(data){
        viewModel.goals(data);
    });
}

function ViewModel() {
    var self = this;
    self.goals = ko.observableArray();
}

var viewModel = new ViewModel();

ko.applyBindings(viewModel);