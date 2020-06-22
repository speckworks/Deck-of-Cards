let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = new Array();

const getDeck = () => {

	for(let i = 0; i < suits.length; ++i)
	{
		for(let j = 0; j < values.length; ++j)
		{
			let card = { 
        key: values[j], value: suits[i]
        };
			deck.push(card);
		}
	}
	return deck;
}

getDeck()

const shuffle = (deck)=>{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; ++i)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];
		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
  return deck;
}

shuffle(deck);

deck.sort((a, b) => {
  //this sort function sorts the deck by Suit
  var nameA = a.value; // ignore upper and lowercase
  var nameB = b.value; // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

deck.sort(function(a, b) {
  //this sort function sorts the deck by card "Value" (key)
  var nameA = a.key; // ignore upper and lowercase
  var nameB = b.key; // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
