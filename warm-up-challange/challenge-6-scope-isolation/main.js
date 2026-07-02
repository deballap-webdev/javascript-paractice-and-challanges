let x = 1; // global scoped
let y = 5; // global scoped

function hello() {
  let x = 2; // block scoped (though its in the function block)

  {
    let x = 3; // block scoped
    var y = 4; // function scoped
    let notVar = "I am trapped in here cause I'm not var"; // block scoped
    console.log(notVar);
    console.log(y + ": function scoped");
    console.log(x + ": block scoped");
  }
  console.log(y + ": function scoped");
  console.log(x + ": blocked scope (though in function block)");
  console.log(notVar); // Type error;
}

console.log(y + ": global scoped");
console.log(x + ": global scoped");

hello();

//Notice how we can't initialize a variable named y in the main function block because this will be a type error due to reassignment as the var is function scoped unlike let and const which are block scoped. noice how we can acess the y variable inside the block from the function block.
