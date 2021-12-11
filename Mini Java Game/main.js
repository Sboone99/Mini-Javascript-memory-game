let theBoss = document.getElementById("the-boss")
console.log(theBoss)

let creamBtn=document.getElementById("cream-btn")
console.log(creamBtn)

let sugarBtn=document.getElementById("sugar-btn")
console.log(sugarBtn)

let creamCount = document.getElementById("cream-countEl")
console.log(creamCount)

let sugarCount = document.getElementById("sugar-countEl")
console.log(creamCount)

let restartBtn = document.getElementById("restart-btn")
console.log(restartBtn)

let henchmanServed = document.getElementById("henchman-served")
console.log(henchmanServed)

let isALive = true;


let rounds = 0

		/*function toggleDiv(id){
			var div = document.getElementById("results");
			div.style.display = div.style.display == "none" ? "block"
			: "none";
		}
		*/

		function toggleResults(){
			var x = document.getElementById("results")
			if (x.style.display === "none"){x.style.display = "block"}
			else {x.style.display = "none"} 
		}

		function roundsLived(){
	rounds=rounds + 1
	henchmanServed.innerText= "Henchman Served: " + rounds
	};
			

let creamCountEl = 0 

let sugarCountEl = 0

	  
	  	function creamInc(){
    creamCountEl = creamCountEl + 1
    creamCount.innerText = creamCountEl + " Creams"
    theBoss.innerText = ""
    
   };

   		function sugarInc(){
    sugarCountEl = sugarCountEl + 1
    sugarCount.innerText = sugarCountEl + " Sugars"
    theBoss.innerText = ""
   

   };

		function randoNumGen(){
	let numOne = Math.floor(Math.random() *13)
	return numOne}

let sugarReq = randoNumGen()

let creamReq = randoNumGen()

		
		function sugarAndCream(){
	theBoss.innerText = "Hey you! get me a coffee with " + sugarReq + " sugar and " + creamReq  + " creams, make it snappy and act like your life depends on it.";
	};

			

		function submit (){
	if (creamCountEl === creamReq && sugarReq === sugarCountEl )
	{isAlive = true 
	roundsLived()
	nextCoffee()}
	else {isAlive = false
	shotdead()
	console.log(isAlive)
	creamCountEl = 0
	sugarCountEl = 0
	creamCount.innerText=""
	sugarCount.innerText=""}        


};

		function shotdead(){
	theBoss.innerText = "Bang! Bang! BDDDddddannng! you have got the Mafia bosses order wrong and he and his gang shot you up for it you slime! GAME OVER"
	creamCountEl = 0
	sugarCountEl = 0
	    }


		function nextCoffee(){
	sugarReq = randoNumGen()
	creamReq = randoNumGen()
	theBoss.innerText = "AHHH thats a good coffee, now how do you want yours? he points to his henchman and he says "+ sugarReq +" sugars and "+ creamReq +" cream";
	creamCountEl = 0
	sugarCountEl = 0
	creamCount.innerText=""
	sugarCount.innerText=""

		}


		function start(){
	randoNumGen()
	sugarAndCream()
	restartBtn.innerText= "Restart"
		}
		

