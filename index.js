
console.log("hello")
var input = document.getElementById("inputBox")
var buttons = document.querySelectorAll('button');

var string = "";

// array.from wil create an array of buttons
var arr = Array.from(buttons);

// callback fucntion or "=>"
arr.forEach(button => {
    button.addEventListener("click", (e) =>{
        if (e.target.innerHTML == "=") {
            string = eval(string)
            //eval is javasccript function which will evaluate value
            input.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;

        }
        else { 
        string += e.target.innerHTML;
        input.value = string
        }
    })
})