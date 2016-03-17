function Lawyer(name, age) {
    this.name = name;// with constructors, use 'this.whatever' instead of declaring a variable and then going from there.
    this.age = age;
    this.profession = 'Lawyer';
    
    return this;// not necessary, but much clearer for conceptual purposes.
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
    // create a master function in order to group the above functions into one, for later reference.
    
    return this;
}

var boss = new Person();
Lawyer.prototype = boss;// set professions equal to the new var declared. used for access to entire group instead of just calling one by one.
SoftwareEngineer.prototype = boss;
Teacher.prototype = boss;
PoliceOfficer.prototype = boss;

Person.prototype.introduce = function () {
    console.log('Hello, my name is ' + this.name + '.' + ' I\'m a ' + this.age + '-year-old ' + this.profession);// 'this' in this case(ha ha) refers to the 'boss' variable declared above.
};


// below variables declared for testing purposes only. doesn't hurt to leave in or take out.
    //var paul = new Lawyer('Paul Revere', 66);
    //var layla = new SoftwareEngineer('Layla Thomas', 31);
    //var rob = new Teacher('Rob Ward', 25);
    //var chris = new PoliceOfficer('Chris Nubin', 61);


function Bus() {
    return {
        people: [],// an empty array acting as a placeholder for 'persons' being inserted
        load: function(Person) {
                this.people.push(Person);
        },
        greet: function() {
            // the for loop here is used to iterate through the 'people' array. without it, the function doesn't run, nor does the computer know how many people there are.
            for (var i = 0; i < this.people.length; i++) {  
            console.log('Hello ' + this.people[i].name + ' the ' + this.people[i].profession);// have to use 'this.people[i].name' since 'this' in this instance refers to the transport var.
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