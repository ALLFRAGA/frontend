/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#header").append("Curriculo");
$("#main").append("Aloisio");



var email = "aloisio@udacity.com";
var newEmail =
	email.replace("udacity", 'gmail');

console.log(email);
console.log(newEmail);



var awesomeThoughts = 
	"I am Aloisio and i am AWESSOME!";

//console.log(awesomeThoughts);


var funThoughts = 
	awesomeThoughts.replace("AWESSOME","FUN");

$("#main").append(funThoughts);
*/

var name = "Aloisio de Mendonça Fraga";
var role = "   Programador";


var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


/*

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
    
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
  
    
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

*/

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var lowerName = name.toLowerCase();
    
    arrayName = lowerName.split(" ");
    
    x = arrayName.length - 1;
 - 1;
    for (var i = 0 ; i <= x; i++) {
    	
    	str = arrayName[i]
    	lowChar = str.charAt(0);
    	upChar = lowChar.toUpperCase();
    	sln = str.length;

    	
    	for (var i = 1; i <= sln; i++) {
    		


    		Things[i]
    	}



    }
    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
console.log(name.length);
console.log(arrayName);
console.log(upChar);





