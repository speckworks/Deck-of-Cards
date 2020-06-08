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
// console.log(deck)

function shuffle(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

shuffle(deck);

deck.sort(function(a, b) {
  var nameA = a.value.toUpperCase(); // ignore upper and lowercase
  var nameB = b.value.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});