import words from "./words.json" with { type: "json" };


const test = "Hello I am Danial"

const spellCheckButton = document.getElementById("spellCheck-button")
spellCheckButton.addEventListener("click",()=>{
   spellCheck(test)
}
)

function spellCheck(test){
    const misspelledContainer = []
    const textToLowerCase = test.toLowerCase().split(' ')
    for(let i = 0; i<= textToLowerCase.length ;i++){
        if(!words.includes(textToLowerCase[i])){
           misspelledContainer.push(textToLowerCase[i]) 
    }
    }
    console.log(`${misspelledContainer}misspelled`);
    
}
    


window.onload = function() {
   
}
