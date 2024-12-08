// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';


class Motorbike extends Vehicle{

  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(  
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ) {
    super()
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = (2 === wheels.length)? wheels: [new Wheel(), new Wheel()];
  }// end of constructor function
    wheelie(){
      console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }

  override printDetails() {
    super.printDetails();
    console.log(`VIN: ${this.vin}
      Color: ${this.color}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight} lbs
      Top speed: ${this.topSpeed} mph`);
      // Print details of the wheels
      console.log(
          `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
        );
        console.log(
          `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
        );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
