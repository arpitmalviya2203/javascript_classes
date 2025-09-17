/******************** try catch throw final********************/
function divideNumbers(a, b) {
  try {
    if (b === 0) {

      throw new Error("Division by zero is not allowed!");
    }
    let result = a / b;
     console.log("Result: " ,result);
    // console.log(`Result: ${result}`);
  } 
  catch (error) {
    
    console.error("Error occurred:", error.message);
  } 
  finally {
    
    console.log("Operation completed.");
  }
}

divideNumbers(10, 2); 
divideNumbers(5, 0);  



/********************closure********************/