choices=["rock","paper","scissors"]
userbtn=document.querySelector(".button1")
combtn=document.querySelector(".button2")
result=document.querySelector(".display")
answer=""
function userchoice(user){
    computerchoice=choices[Math.floor(Math.random()*3)]
    switch(computerchoice){
        case "rock":
        combtn.textContent="👊"
        break
        case "paper":
        combtn.textContent="✋"
        break  
        case "scissors":
        combtn.textContent="✌️"
        break
    }
    switch(user){
        case "rock":
        userbtn.textContent="👊"
        answer=(computerchoice=="rock")?"It's a Tie!":(computerchoice=="paper")?"You Lose!":"You Win!"
        result.textContent=answer
        break
        case "paper":
        userbtn.textContent="✋"
         answer=(computerchoice=="paper")?"It's a Tie!":(computerchoice=="scissors")?"You Lose!":"You Win!"
        result.textContent=answer
        break  
        case "scissors":
        userbtn.textContent="✌️"
         answer=(computerchoice=="scissors")?"It's a Tie!":(computerchoice=="rock")?"You Lose!":"You Win!"
        result.textContent=answer
        break
    }
    if(result.textContent=="You Win!"){
        result.style.backgroundColor="green"
        result.style.color="white"
         result.style.borderColor="darkgreen"
    }
     else if(result.textContent=="You Lose!"){
        result.style.backgroundColor="red"
        result.style.color="white"
         result.style.borderColor="darkred"
        }
        else{
            result.style.backgroundColor="orange"
        result.style.color="black"
         result.style.borderColor="darkorange"
        }
}