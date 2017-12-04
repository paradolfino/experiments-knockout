// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);
    
     self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        var nullPrice = 0;
        return price ? "$" + price.toFixed(2) : "$" + nullPrice.toFixed(2);        
    });
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Standard (sandwich)", price: 0 },
        { mealName: "Premium (lobster)", price: 34.95 },
        { mealName: "Ultimate (whole zebra)", price: 290 }
    ];    

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("Steve", self.availableMeals[0]),
        new SeatReservation("Bert", self.availableMeals[0])
    ]);
    
    self.passengerName = ko.observable("");
    
    // Operations
    self.addSeat = function() {
        self.seats.push(new SeatReservation(self.passengerName, self.availableMeals[0]));
    }
    
    self.removeSeat = function(seat) { self.seats.remove(seat) };
    
    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++) {
           total += self.seats()[i].meal().price;
       }
       return "$" + total.toFixed(2);
    });
}

ko.applyBindings(new ReservationsViewModel());