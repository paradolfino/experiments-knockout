var GuildMembers = GuildMembers || {};

    GuildMembers.availableRanks = [
        { rankName: "Initiate", level: 'Member' },
        { rankName: "Officer", level: 'Officer' },
        { rankName: "Master", level: 'Master' }
    ];

    GuildMembers.availableClasses = [
        { className: "Warrior" },
        { className: "Priest" },
        { className: "Hunter" }
    ];

    GuildMembers.RankModel = function (name, initialRank, initialClass)
    {
        var self = this;
        self.name = name;
        self.rank = ko.observable(initialRank);
        self.class = ko.observable(initialClass);
    }

    GuildMembers.GuildMembersViewModel = function ()
    {
        var self = this;

        // Editable data
        self.members = ko.observableArray([]);
        self.memberName = ko.observable("");

        // Class to represent a row in the seat reservations grid
        self.addRank = function (name, initialRank, initialClass)
        {
            var rank = new GuildMembers.RankModel(name, initialRank, initialClass);
            self.members.push(rank);
        }

        // Operations
        self.addMember = function ()
        {
            //you can also do ko.unwrap
            self.addRank(self.memberName(), GuildMembers.availableRanks[0], GuildMembers.availableClasses[0]);
        }

        self.removeMember = function (member) { self.members.remove(member) };

        self.initDefaults = function ()
        {
            self.addRank("Steve", GuildMembers.availableRanks[0], GuildMembers.availableClasses[0]);
            self.addRank("Bert", GuildMembers.availableRanks[0], GuildMembers.availableClasses[0]);
        }

        self.initDefaults();
    }

    ko.applyBindings(new GuildMembers.GuildMembersViewModel());