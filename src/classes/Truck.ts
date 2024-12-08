// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(  
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super()
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = (4 === wheels.length)? wheels: [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }// end of constructor function

  tow(vehicle: Truck | Motorbike | Car): void {
   
    let make: string = vehicle.make;
    let model: string = vehicle.model;
  
    if(this.towingCapacity >= vehicle.weight) {
      console.log(`The ${make} ${model} is beng towed`);
    } else {
      console.log(`The ${make} ${model} is to heavy to be towed`);
    }

  }
  override printDetails() {
    super.printDetails();
    console.log(`VIN: ${this.vin}
      Color: ${this.color}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight} lbs
      Top speed: ${this.topSpeed} mph
      Towing capacity: ${this.towingCapacity} lbs`
     );
        // Print details of the wheels
        console.log(
          `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
        );
        console.log(
          `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
        );
        console.log(
          `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
        );
        console.log(
          `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
        );
  }

}



// Export the Truck class as the default export
export default Truck;
