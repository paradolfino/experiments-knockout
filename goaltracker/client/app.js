function getGoals() {
    $.get('http://localhost:3000/goals', function(data){
        viewModel.goals(data);
    });
}

function ViewModel() {
    var self = this;
    self.goals = ko.observableArray();
    self.goalInputName = ko.observable();
    self.goalInputType = ko.observable();
    self.goalInputDeadline = ko.observable();
    self.addGoal = function() {
        var name =  $("#name").val();
        var type =  $("#type").val();
        var deadline =  $("#deadline").val();
        console.log(name, type, deadline);
    }
}

var viewModel = new ViewModel();

ko.applyBindings(viewModel);