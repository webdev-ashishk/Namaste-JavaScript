//<-------First------------>
// function outterFun() {
//   var a = 7;
//   function innerFun() {
//     console.log(a);
//   }
//   innerFun();
// }
// outterFun();

//<-------Second------------>

// function outterFun() {
//   var a = 7;
//   function innerFun() {
//     console.log(a);
//   }
//   return innerFun;
// }
// var z = outterFun();
// console.log(z);
// z();

//<-------same as second------------>

// function outterFun() {
//   var a = 7;
//   return function innerFun() {
//     console.log(a);
//     a = 100;
//   };
// }
// var z = outterFun();
// console.log(z);
// z();

// <-------fifth----------->

function z() {
  var a = 10;
  function y() {
    var b = 100;
    function x() {
      console.log(a, b);
    }
    x();
  }
  y();
}
z();
