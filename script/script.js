const allSeat = document.getElementsByClassName('seat');
let count = 0;
for(const seat of allSeat){
    seat.addEventListener("click", function (e) {
        e.target.setAttribute('disabled', false);
         const firstSeatCount = getConvertedValue('selected-seat');
         if(firstSeatCount + 1 > 4){
            alert('Please note: You can only select a maximum of four seats for this booking.');
            return;
         }

         const selectedBtn = seat;
         selectedBtn.style.backgroundColor = "#1DD100";
         selectedBtn.style.color = '#FFFFFF';

        //  update seat
         const selectedSeat = getConvertedValue('selected-seat');
         document.getElementById('selected-seat').innerText = selectedSeat + 1;

         const seatLeft = getConvertedValue('seat-left');
         document.getElementById('seat-left').innerText = seatLeft - 1;

         
        //  show the seat
         const seatInnerText = seat.innerText;
         const seatContainer = document.getElementById('show-seat');
         
         const div = document.createElement('div');
         const p1 = document.createElement('p');
         const p2 = document.createElement('p');
         const p3 = document.createElement('p');
         
         p1.innerText = seatInnerText;
         p2.innerText = 'Economoy';
         p3.innerText = 550;

         div.appendChild(p1);
         div.appendChild(p2);
         div.appendChild(p3);

         div.classList.add('flex', 'justify-between');

         seatContainer.appendChild(div);

         updateTotalCost(p3);
         updateGrandTotal();
        })
}

function updateGrandTotal(status){
    const totalCost = getConvertedValue('total-cost');

    if(status === undefined){
        document.getElementById('grand-total').innerText = totalCost;
    }
    else{
        const couponCode = document.getElementById('coupon-code').value;

        if(couponCode == 'NEW15'){
            const discount = totalCost * .15;
            document.getElementById('grand-total').innerText = totalCost - discount;
            const hideCoupon = document.getElementById('coupon-section');
            hideCoupon.classList.add('hidden')
        }
        else if(couponCode == 'Couple 20'){
            const discount = totalCost * .2;
            document.getElementById('grand-total').innerText = totalCost - discount;
        }
        else{
            alert('Please enter valid coupon code');
        }
    }
}

function updateTotalCost(price){
    const totalCost = getConvertedValue('total-cost');
    const sum = totalCost + 550;
    document.getElementById('total-cost').innerText = sum;
}


function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseFloat(price);
    return convertPrice;

}
