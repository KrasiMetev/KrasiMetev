function vacation(number, group, day) {
    let price = 0;
    if (group === 'Students') {

        if (day === 'Friday') {
            price = 8.45 * number;
        } else if (day === 'Saturday') {
            price = 9.8 * number;
        } else if (day === 'Sunday') {
            price = 10.46 * number;
        }
            if (number >= 30) {
                price = price * 0.85;
            }


    } else if (group === 'Business') {

        if (number >= 100) {
            if (day === 'Friday') {
                price = 10.90 * (number - 10);
            } else if (day === 'Saturday') {
                price = 15.60 * (number - 10);
            } else if (day === 'Sunday') {
                price = 16 * (number - 10);
            }
        }

        if (day === 'Friday') {
            price = 10.90 * number;
        } else if (day === 'Saturday') {
            price = 15.6 * number;
        } else if (day === 'Sunday') {
            price = 16 * number;
        }
       

    } else if (group === 'Regular') {

        if (day === 'Friday') {
            price = 15 * number;
        } else if (day === 'Saturday') {
            price = 20 * number;
        } else if (day === 'Sunday') {
            price = 22.5 * number;
        }

            if (number >= 10 && number <= 20) {
                price = price - 0.05*price
            }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(40, 'Regular', 'Saturday');