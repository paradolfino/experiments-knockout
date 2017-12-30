function getGoals() {
    $.get('http://localhost:3000/goals', function(data){
        viewModel.goals(data);
    });
}

function viewModel() {
    var self = this;
    
}