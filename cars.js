// /*
//   Create a function named Car with one property named `manufactured_date`
//  */
// function Car () {
//   this.manufactured_date = Date.now()
// }
// /*
//   Create a function named Make.
//   Set its prototype to the Car function.
//   Define a property `manufacturer` with a default value of empty string.
//  */

// function Make () {

// }

// Make.prototype = new Car()

// var manufacturer = "";
// /*
//     Create a function named Model.
//     Set its prototype to the Make function.
//     Define a property `modelName` with a default value of empty string.
// */

// function Model () {

// }

// Model.prototype = new Make()

// var modelName = "";

// /*
//     Create a new Make object - your favorite one (e.g. Mini)
// */

// var Mini = new Make();
//   console.log(Mini)

// /*
//     Create a new Model object of your favorite model (e.g. Clubman)
// */
// var Clubman = new Mini();
// Clubman.modelName = "Clubman S";
//   console.log(Clubman)

// /*
//     Being an avid car collector, you own three different cars all of
//     same model from your favorite manufacturer.

//     Create three new objects for each of your three favorite cars.
// */

// var Clubman = new Model()
//   Clubman.modelName = "Honda";
//   console.log(Honda);

// var Nissan = new Make()
//   Make.manufacturer = "Nissan";
//   console.log(Nissan);

// var Toyota = new Make()
//   Make.manufacturer = "Toyota";
//   console.log(Toyota);

// /*
//     Being a rich, avid car collector, you own 2 cars from your second
//     favorite manufacturer. You also one 1 car from your third favorite
//     manufacturer.
// */

// var Lambo = new Make()
//   console.log(Lambo);

// var Acura = new Make()
//   console.log(Acura);

// var Subaru = new Make()
//   console.log(Subaru);