var punishment = function(){
    punishArray=["buying or making everyone coffee.","writing a blog post for this class.","coming to next class in a formal attire.","ending each conversation with 'winter is coming' until the end of lunch.","singing and dancing in front of the class.","bowing to everyone and apologizing seriously.","standing in the corner for one hour.","doing two push ups for every minute late.","jogging to the ferry and taking a selfie as proof."];
    punish = punishArray[Math.floor(Math.random() * punishArray.length)];
    return punish;
};

var myButton = document.getElementById("punisher");

myButton.addEventListener("click", function(){
	elem = document.getElementById("ready_punish");
	elem.innerHTML = "The punishment is " + punishment();
}) 