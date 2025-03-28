


function generate(){
    const passwordLength = document.getElementById('cont').value;
    let includeUppercase = false;
    let includeNumbers = '';
    let includeSymbols = '';
    let includeLowercase = '';
    let upper = document.getElementById('upper')
    let lower = document.getElementById('lower')
    let numb = document.getElementById('numb')
    let symb = document.getElementById('symb')
    
    if(upper.checked){
        includeUppercase = true;
   }
   if(lower.checked){
    includeLowercase = true;
   }
   if(symb.checked){
    includeSymbols = true;
   }
   if(numb.checked){
    includeNumbers = true;
   }
   
   
   function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols ){

    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "0987654321";
    const symbolChars = "!@#$%^&*()_+=-";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : ""; 
    allowedChars += includeUppercase ? uppercaseChars : ""; 
    allowedChars += includeNumbers ? numberChars : ""; 
    allowedChars += includeSymbols ? symbolChars : ""; 
    
    let resultElement = document.getElementById('result');

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        resultElement.style.fontSize = "18px";
        resultElement.style.opacity = "0.7";
        return `(At least 1 set of character needs to be selected)`;
        
    }
    
    resultElement.style.fontSize = "32px";
    resultElement.style.opacity = "1";
    
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;

    
}
   const password  = generatePassword(passwordLength, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols);
    document.getElementById('result').innerText = password;
}

let copyText = document.querySelector('.copy-text');



document.querySelector(".copy-text button").addEventListener("click", function() {
    let resultText = document.getElementById("result").innerText; // Pega o texto do <h2>

    if (resultText === "your password" || resultText.startsWith("(")) {
        alert("Nenhuma senha válida para copiar!");
        return;
    }

    navigator.clipboard.writeText(resultText).then(() => {
        copyText.classList.add("active");
   window.getSelection().removeAllRanges();
   setTimeout(function(){
    copyText.classList.remove("active");
   },2500);
        
    }).catch(err => console.error("Erro ao copiar:", err));
});













    

    
