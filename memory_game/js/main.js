var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var createBoard = function() {
	for(var i = 0; i < cards.length; i++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var resetCards = function() {
	cardsInPlay = [];
	for(var j = 0; j < cards.length; j++)
	{
		document.getElementsByTagName('img')[j].setAttribute('src', 'images/back.png');
	}
}

var checkForMatch = function() {
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
		cardsInPlay = [];
	}
	else
	{
		alert("Sorry, try again");
		resetCards();
	}
}

var flipcard = function() {
	var cardId = this.getAttribute('data-id');
	//console.log("User flipped: " + cards[cardId].rank);
	//console.log("Of the suit: " + cards[cardId].suit);
	//console.log("Card Image: " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);



	if(cardsInPlay.length === 2)
	{
		setTimeout(function(){ checkForMatch(); }, 200);
		
	}
}

document.getElementById('reset').addEventListener('click', resetCards);

createBoard();