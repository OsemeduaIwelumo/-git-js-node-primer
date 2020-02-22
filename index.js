function multiplier(){
    var product = 1;
    if (arguments.length < 2){
    throw new Error("Illegal arguments counts. Arguments must be greater than 1")
    }
    for (var x=0; x < arguments.length; x++){
    product = product * arguments[x];
    }
    return product;
   } 

   //Call function without arguments. Here error will be caught and message output to console
try{
    console.log(multiplier())
   }catch(error){
    console.log(error.message); //This will output the message 'Illegal arguments counts. Arguments must be greater than 1'
   } 

   //Call function with arguments. No error here.
try{
    console.log(multiplier(2,3)); //This will output 6
   }catch(error){
    console.log(error.message);
   } finally  {
       var error = "You're good";
       console.log(error);
   }