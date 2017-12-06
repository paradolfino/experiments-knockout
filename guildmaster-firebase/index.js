// Class to represent a row in the seat reservations grid
function AddRank(name, initialRank, initialClass) {
    var self = this;
    self.name = name;
    self.rank = ko.observable(initialRank);
    self.class = ko.observable(initialClass);
    console.log(initialClass);
}

// Overall viewmodel for this screen, along with initial state
function GuildMembersViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableRanks = [
        { rankName: "Initiate", level: 'Member' },
        { rankName: "Officer", level: 'Officer' },
        { rankName: "Master", level: 'Master' }
    ];
    
    self.availableClasses = [
        { className: "Warrior" },
        { className: "Priest" },
        { className: "Hunter" }
    ];

    // Editable data
    self.members = ko.observableArray([
        new AddRank("Steve", self.availableRanks[0], self.availableClasses[0]),
        new AddRank("Bert", self.availableRanks[0], self.availableClasses[0])
    ]);
    
    self.memberName = ko.observable("");
    
    // Operations
    self.addMember = function() {
        self.members.push(new AddRank(self.memberName, self.availableRanks[0], self.availableClasses[0]));
    }
    
    self.removeMember = function(member) { self.members.remove(member) };
    
   
}

ko.applyBindings(new GuildMembersViewModel());