/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
   this.manufactured_date = Date.now()
 // Create the manufactured date property (see above)
}

/*
  Create a constructor function named Make with one
  argument that will hold the manufacturer of the Make (see below).

  Set its prototype to a new instance of the Car function.

  Define a property `manufacturer` and assign the
  manufacturer property to the argument value.
 */
function Make (maker) {
  this.manufacturer = maker;
}

console.log(Make)
// Set the prototype to Car
Make.prototype = new Car()

var manufacturer = Make;
console.log(manufacturer)

/*
  Create a new constructor function for the make of your favorite car.
  It will inherit from the general Make function.
 */
function Acura (name) {
  this.modelName = name;
}
Acura.prototype = new Make("SH");
console.log(Acura)

/*
    Create a constructor function named after your
    favorite car model with one argument that will
    hold the specific name of the model (see example below).

    Set its prototype to a new instance of the make you defined
    above and pass in the string value of the model.

    Define a property to hold the name of the model and set its
    value to the argument value.

*/
function Type_R (name) {

}
// Set the prototype to appropriate model you created above and set the model name argument
Type_R.prototype = new Acura("Type_R");
console.log(Type_R)

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    Create three new instances for each of your three favorite cars.

    Create a new property on each object to hold the license plate
    number for each car.
*/

var Type_R_1 = new Type_R();
  Type_R_1.plates = "123-456";
  logCar(Type_R_1)

var Type_R_2 = new Type_R();
  Type_R_2.plates = "654-321";
  console.log(Type_R_2)

var Type_R_3 = new Type_R();
  Type_R_3.plates = "789-012";
  console.log(Type_R_3)


function logCar (car) {
  console.log("plates: ", car.plates);
  console.log("manu: ", car.manufacturer);
  console.log("make: ", car.modelName);
  console.log("")

}







