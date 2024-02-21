const allSeat = document.getElementsByClassName('seat');
let count = 0;
for(const seat of allSeat){
    seat.addEventListener("click", function (e) {

         const selectedBtn = seat;
         selectedBtn.style.backgroundColor = "#1DD100";
         selectedBtn.style.color = '#FFFFFF';
         
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

function updateGrandTotal(){
    const totalCost = getConvertedValue('total-cost');
    document.getElementById('grand-total').innerText = totalCost;
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
