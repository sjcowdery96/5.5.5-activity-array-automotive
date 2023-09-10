//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, numberOfWheels, passengers, maximumPassengers, maximumSpeed,fuel){
        super(make, model, year, color, mileage) //calls the parent constructor
        //adds the new parameters specific to car constructor
        this.numberOfWheels = numberOfWheels
        this.passenges = passengers
        this.maximumPassengers = maximumPassengers
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
        this.scheduledService = false
    }

    loadPassenger(numberOfPassengers){
        if(numberOfPassengers>this.maximumPassengers){
            console.log("y'all mfs can't fit!")
        }
    }
    //starts the car...vroom!
    start(){
        if(this.fuel>0){
            return true
            console.log("Vroom!")
        }
        else return false
    }
    //method for determining scheduled service times
    scheduledService(mileage){
        if(mileage>30000){
            this.scheduledService = true
        }
        return this.scheduledService
    }
    //adds a method for when you get your car serviced
    serviced(){
        if(this.scheduledService == true){
            this.scheduledService = false
        }
    }
    
}
let b = new  Car("Ford", "Taurus", 2011, "blue",12415, 4, 4, 4) //creates a new Ford Taurus 

console.log(b.doors) //prints the doors on the car

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
