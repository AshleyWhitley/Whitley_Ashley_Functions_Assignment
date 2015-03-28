/*
Ashley Whitley
Functions Assignment
March 26, 2015
SDI Section 01
 */

//Variables:

var request = prompt("Do you want the numbers for the Florida Lottery?");


//Functions 1:

function Verification(answer) {  //argument

    var responses = 1;

    while (answer === ""){  //while loop code block
        prompt("Please enter a response to continue."); //prompt is shown on screen versus the console
        responses++;
        if (responses === 5) {
            alert("Not a valid response.");
            break;
        }
    }

    return answer;
}



//Function 2:

function lotto(min, max, par) { //parameter of 6 total answers that are random at once

    var rand = []; //inorder to have 6 seperate numbers it has to be an array code

    for (var i = 0; i < par; i++){ //this declares between which numbers those 6 numbers can be.
        var numbers = Math.round(Math.random() * (max - min) + min); //math.random allows completely random numbers every  and Math,round allows for whole numbers and no decimals

        rand[i] = numbers; // this connects the variable to the array so it can be returned correctly and output correctly
    }

    return rand;
}

//Main Code 1

request = Verification(request);  //value sent to the variable to produce the function
console.log("Thank you for responding with" + " "+ request + ". Below are the winning numbers!"); //string is printed to console for the user to see.

//Main Code 2

rand = lotto(1, 53, 6);
console.log("The winning numbers are..." + " "+ rand + ". If these are your numbers please call the number on the back of your ticket!");

