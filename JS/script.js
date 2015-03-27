/*
Ashley Whitley
Functions Assignment
March 26, 2015
SDI Section 01
 */

//Variables:

var request = prompt("Do you want the numbers for the Florida Lottery?");


//Functions:

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


//Main Code

request = Verification(request);  //value sent to the variable to produce the function
console.log("Thank you for responding with" + " "+ request + ". Below are the winning numbers!");




/*function printNumbers(numbers,type){
    for(var x in numbers){
        document.getElementById(type+x).innerHTML = numbers[x];
    }
}
function getNumbers(totalBalls,balls) {
    var numbers = [];
    for (var i = balls; i > 0; i--){
        numbers.push(i);
    }
    numbers.sort(
        function(){
            return (Math.round(Math.random())-0.5);
        }
    );
    return numbers.slice(0,totalBalls);
}
*/
