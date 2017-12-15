
function UsersViewModel() {
    self = this;
    self.userArray1 = ko.observableArray(['Edward', 'Jose', 'Sam']);
    self.userArray2 = ko.observableArray([
        {firstName: 'Edward', lastName: 'Jenkins'},
        {firstName: 'Percival', lastName: 'Jenkins'}
    ]);
}

function output() {
    $('#output').append('There are ' + userArray1().length + ' users in the array 1. <br>');
    $('#output').append('There are ' + userArray2().length + ' users in the array 2. <br>');
}

$(document).ready(function(){
    ko.applyBindings(UsersViewModel());
});


