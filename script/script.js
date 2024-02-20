const allSeat = document.getElementsByClassName('seat');
let count = 0;
for(const seat of allSeat){
    seat.addEventListener("click", function (e) {
            // count = count - 1;
            // console.log(count);
            // document.getElementById('seat-left').innerText = count;

            count += 1;
            document.getElementById('selected-seat').innerText = count;

           
        })
}


