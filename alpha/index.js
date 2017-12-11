var myViewModel = {
    firstName: ko.observable('John'),
    lastName: ko.observable('Doe')
}

$('button').click(function(){
    myViewModel.firstName('George');
    myViewModel.lastName('Ross');
});

myViewModel.firstName.subscribe(function(newValue){
    console.log('The users first name is now ' + newValue);
});

myViewModel.firstName.subscribe(function(oldValue){
    console.log('The users first name was ' + oldValue);
}, null, "beforeChange");

ko.applyBindings(myViewModel);