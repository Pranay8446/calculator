var a= 0 
// change mode
var mode = document.querySelector(".na") 
var page = document.querySelector("#page1")    
var buttons = document.querySelectorAll(".button")      
var but2s = document.querySelectorAll("#but2")
var input = document.querySelector("#in")

function changeMode(){
    if(a==0){
        page.style.backgroundColor = "black"    // change the background color
        mode.innerHTML = "Dark"
        document.body.style.color = "white"     // change the text color
        buttons.forEach(button => {             // change the button color for each use to select the button
            button.style.color = "white";
            button.style.backgroundColor = "rgb(23, 23, 25)"
        });
        but2s.forEach(button => {
            button.style.color = "rgb(83, 163, 2)";
            button.style.backgroundColor = "rgb(45, 45, 47)";
            buttons[0].style.color = "rgb(255, 0, 0)"       // change the color of the clear button specific button
            buttons[19].style.backgroundColor = "rgb(83, 163, 2)"
            buttons[19].style.color = "white"
        });
        input.style.color = "white"
        
        a=1
    }else{
        page.style.backgroundColor = "rgb(246, 246, 248)"
        mode.innerHTML = "Light"
        document.body.style.color = "black"
        buttons.forEach(button => {
            button.style.color = "black";
            button.style.backgroundColor = "rgb(252, 252, 254)"
        });
        but2s.forEach(button => {
            button.style.color = "rgb(83, 163, 2)";
            button.style.backgroundColor = "rgb(233, 233, 235)";
            buttons[0].style.color = "rgb(255, 0, 0)"
            buttons[19].style.backgroundColor = "rgb(83, 163, 2)"
            buttons[19].style.color = "white"
        });
        input.style.color = "black"
        a=0
    }
}

// calculator calculation
var string = ""

var button = document.querySelectorAll(".button") // get all buttons

Array.from(button).forEach((button)=>{
    button.addEventListener("click", (e)=>{ // add event listener to all buttons
        try {
        if(e.target.innerHTML == "="){      // check if the button is equal
            string = eval(string);     // evaluate the string
            document.querySelector('.input').value = string  // display the result
        }else if(e.target.innerHTML == "C"){    // check if the button is clear
            string = "";                        // clear the string
            document.querySelector('.input').value = string  
        }else{
            string = string + e.target.innerHTML    // add the button value to the string
            document.querySelector('.input').value = string     // display the string
        }
    } catch (error) {   // catch any error and alert the user
        alert(error.message);
        string = "";
        document.querySelector('.input').value = "";
    }
    })
})





