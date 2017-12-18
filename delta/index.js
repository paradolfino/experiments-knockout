

function viewModel() {
    const self = this;
    self.htmlString = ko.observable("<h1>Lol</h1>");
    self.amount = ko.observable(11);
    self.url = ko.observable("http://www.google.com");
    self.title = ko.observable("Google");

    //control flow bindings
    self.employees = ko.observableArray([
        {id: "e100", name: "Spot"},
        {id: "e400", name: "Spat"},
        {id: "e102", name: "Spoon"}
    ]);

    self.customers = ko.observableArray(["Sprock", "Sprint", "Sprecht"]);

    //with
    self.city = "Boston";
    self.coords = {
        lat: 42,
        lon: 71
    };

    //form and input bindings
    self.users = ko.observableArray([
        "John",
        "Lance",
        "Dan"
    ]);

    self.removeUser = function(user) {
        self.users.remove(user);
    }
}

ko.applyBindings(new viewModel());