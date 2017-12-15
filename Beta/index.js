var userArray1 = ko.observableArray(['Edward', 'Jose', 'Sam']);

function output() {
    $('#output').append('There are ' + userArray1().length + ' users in the array. <br>');
}

$(document).ready(function(){
    output();
    userArray1().push('Johannas');
    output();
    
});


