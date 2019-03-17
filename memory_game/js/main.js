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

var checkForMatch = function() {
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else
	{
		alert("Sorry, try again");
	}
}

var flipcard = function(cardId) {
	console.log("User flipped: " + cards[cardId].rank);
	console.log("Of the suit: " + cards[cardId].suit);
	console.log("Card Image: " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length === 2)
	{
		checkForMatch();
	}
}

flipcard(0);
flipcard(2);