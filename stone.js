// use 2 variable 1 use to track yur score 2nd for comp score
let userscore = 0;
let compscore = 0;

// sare 3no choices ko acess krnege 
const choices = document.querySelectorAll(".choice");
// mag paragraph ko acsess karnge show usme result print ho
const msg =document.querySelector("#msg") // show winner ko isme dalnge 
//acsess user score
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");


// now generate computer choice har ek kaam ke liye ek function banao 
const gencomchoice = ()  =>{
    const options = ["rock" , "paper" ,"scissors"]//inme se random kuch nikale ke lioye
    // ** random string na create kr skte hai but random number create kr skte hai 
    // ussi ko as a strimng ka index leke use krnge in range of only 0 se 2 ke bichme 
    // math.random*3  isase 0 se 3 tak me aaeiga no    math.floor = decimal hata dega 
   const randidx =  Math.floor(Math.random()*3);
   return options [randidx];

    // rock paper scissor isme se randomluy computr chose krega 
};


//draw ke liye 
const drawgame = () =>{
   
    msg.innerText = "Game Draw Play Again!";
    msg.style.backgroundColor =" #081b31"
};

//function for winner
const showwinner = (userwin , userchoice ,compchoice) => {
    if (userwin) {
       userscore++;
       userscorepara.innerText = userscore;
        msg.innerText = `You win!  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
      
        msg.innerText = `You lose! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";

    };
};

// computer ko rendiom choice gnerate karega 

const playgame = (userchoice)  =>{// now compar ekrnge user jitega ki computer

console.log("user choice =" , userchoice);
// now generate computer choice har ek kaam ke liye ek function banao 
const compchoice = gencomchoice();
console.log(" comp choice =" , compchoice);
//JAB USER AUR COMP FIGHT KRE JITEGA KON YE DIKHNA HAI 
if (userchoice === compchoice) { //draww ho jeiga
   drawgame(); // game was draw print ho jeiga if dono same 
}
else{
    let userwin = true;
    if(userchoice === "rock") // comp ki choice scis ya paper hi hoga  as rock to na ho skti hoti to phle hi draw ho jata 
        {
            userwin =  compchoice === "paper" ? false:true ; //is scissor hua to jit gya 

    }
    else if (userchoice === "paper"){ // ya comp ne rock chose kiya hoga ya scissor   paper  scisssors me scissors jitega  means computer  is is comp rock ko chose karta to user jit jeiga so false le baad true lagyee haui
      userwin = compchoice === "scissors" ? false:true;
    }
    else{
        // user ke pass only scissor bachti hai   comp ke pass rock aur paper bachti hai  scissor se rock to rock comp win iff sccisoor se paaper then scissor win user win
        userwin = compchoice === "rock" ? false:true;
    }
    showwinner(userwin , userchoice ,compchoice);
}

}


choices.forEach((choice) => {
    choice.addEventListener("click" , () => { // now ab har div ke id ko acsess karnge 
        const userchoice= choice.getAttribute("id");
console.log("choice was clicked :" , userchoice);
  
playgame(userchoice)
    });

});
// computer ko rendiom choice gnerate karega 