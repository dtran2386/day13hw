function Lawyer(name, age) {
    this.name = name;
    this.age = age;
    this.profession = 'Lawyer';
    
    return this;
}

function SoftwareEngineer(name, age) {
    this.name = name;
    this.age = age
    this.profession = 'Software Engineer';
    
    return this;
}

function Teacher(name, age) {
    this.name = name;
    this.age = age;
    this.profession = 'Teacher';
    
    return this;
}

function PoliceOfficer(name, age) {
    this.name = name;
    this.age = age;
    this.profession = 'Police Officer';
    
    return this;
}

function Person() {
    
    
    return this;
}

var boss = new Person();
Lawyer.prototype = boss;
SoftwareEngineer.prototype = boss;
Teacher.prototype = boss;
PoliceOfficer.prototype = boss;

Person.prototype.introduce = function () {
    console.log('Hello, my name is ' + this.name + '.' + ' I\'m a ' + this.age + '-year-old ' + this.profession);
};


var paul = new Lawyer('Paul Revere', 66);
var layla = new SoftwareEngineer('Layla Thomas', 31);
var rob = new Teacher('Rob Ward', 25);
var chris = new PoliceOfficer('Chris Nubin', 61);


function Bus() {
    return {
        people: [],
        load: function(Person) {
                this.people.push(Person);
        },
        greet: function() {
            for (var i = 0; i < this.people.length; i++) {  
            console.log('Hello ' + this.people[i].name + ' the ' + this.people[i].profession);
            }
        },
    };
}
// these work!
//console.log(paul.introduce()); 
//console.log(layla.introduce());
//console.log(rob.introduce());
//console.log(chris.introduce());
var people = [];
people.push(new Lawyer('Paul Revere', 66));
people.push(new SoftwareEngineer('Layla Thomas', 31));
people.push(new Teacher('Rob Ward', 25));
people.push(new PoliceOfficer('Chris Nubin', 61));


// Should print out all of the "Hello, my name is..." lines.
for (var i = 0; i < people.length; i++) {
  people[i].introduce();
}

var transport = new Bus();
for (var i = 0; i < people.length; i++) {
  transport.load(people[i]);
}

// Should print out four different "Hello {name}..." lines
transport.greet();