const start=document.getElementById("start");
const newcard=document.getElementById("new");

const message=document.getElementById("second");

const cards=document.getElementById("third");

const sum=document.getElementById("fourth");

let sumofcards=0;
let a=0;

start.addEventListener("click",function(){
	let arr=[];
	a=0;
	message.textContent="Get a New Card!"
	let firstcard= Math.ceil(Math.random()*11)
    let secondcard=Math.ceil(Math.random()*11)
    arr.push(firstcard.toString());
    arr.push(secondcard.toString());

    cards.textContent="Cards: ";
    sumofcards=0;
    for( let i=0;i<arr.length;i++)
		{
			cards.textContent+=arr[i]+"   "
			sumofcards=firstcard+secondcard;
		}

	sum.textContent="Sum: "+sumofcards;
})


newcard.addEventListener("click",function(){

	if(a==1)
	{
		message.textContent = "Game Over. You've got BLACKJACK!"
		
	}
	else if(a==2)
	{
		message.textContent = "Game Over. No more cards available."
		
	}
	else{


	let latestcard= Math.ceil(Math.random()*11)
	cards.textContent+=latestcard.toString()+"   ";
	sumofcards+=latestcard;
	sum.textContent="Sum: "+sumofcards;


	if (sumofcards <= 20) {
        message.textContent = "Get a New Card!"
    }
     else if (sumofcards == 21) 
    {
        message.textContent = "You've got Blackjack!"
        a=1
    }
     else 
    {
        message.textContent = "You're out of the game!"
        a=2
    }
}


})







