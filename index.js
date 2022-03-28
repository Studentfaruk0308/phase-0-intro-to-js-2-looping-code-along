function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

console.log(writeCards(["Ami", "Tumi", "She"], "Wedding"));

  function countDown(startingNumber) {
    while ( startingNumber > 0 ) {
      console.log(`I am the count down number ${startingNumber}`);
      startingNumber --;
    }
    console.log(`I am the last number ${startingNumber}`);
  }

countDown(9);