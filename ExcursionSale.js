function excursionSale(input) {
    let seaTripAmount = Number(input.shift());

    let mountainTripAmount = Number(input.shift());
    
    let profit = 0;
    
    const prices = {
    
    'sea': 680,
    
    'mountain': 499,
    
    }
    
     
    
    while (input.length > 0) {
    
    const destination = input.shift();
    
    if (destination === 'Stop'|| (seaTripAmount === 0 && mountainTripAmount === 0)) {
    
    break;
    
    }
    
    if (destination.toLowerCase() === 'sea' && seaTripAmount > 0) {
    
    profit += prices.sea;
    
    seaTripAmount--;
    
    } else if (destination.toLowerCase() === 'mountain' && mountainTripAmount > 0) {
    
    profit += prices.mountain;
    
    mountainTripAmount--;
    
    }
    
    }
    
     
    
    if (seaTripAmount === 0 && mountainTripAmount === 0) {
    
    console.log('Good job! Everything is sold.');
    
    }
    
     
    
    console.log(`Profit: ${profit} leva.`);
    
    }
excursionSale(['2', '2', 'sea', 'mountain', 'sea', 'sea', 'mountain'])