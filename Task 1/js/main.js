let roundes = document.getElementsByClassName("round-section")
let mainSection = document.querySelector("#main-section")
console.log(mainSection.offsetHeight);
let round = roundes[0]
let left = 0
let topposi = 0
window.addEventListener('keydown', function (e) {
    //Right Side Navigation
    if (e.keyCode == 39) {
        left += 2;
        round.style.left = left + 'px';
        if (left > 700) {
            left = -100;
            round.style.left = left + 'px'
        }
    }
    //Left Side Navigation
    else if (e.keyCode == 37) {
        left -= 2;
        round.style.left = left + 'px';
        if (left < -100) {
            left = 700;
            round.style.left = left + 'px'
        }
    }
    //Buttom Side Navigation
    else if (e.keyCode == 40) {
        topposi += 2;
        round.style.top = topposi + 'px';
        if (topposi > mainSection.offsetHeight) {
            topposi = -100;
            round.style.top = topposi + 'px'
        }
    }
    //Top Side Navigation
    else if (e.keyCode == 38) {
        topposi -= 2;
        round.style.top = topposi + 'px';
        if (topposi < -100) {
            topposi = mainSection.offsetHeight;
            round.style.top = topposi + 'px'
        }
    }
}
)
//Drop Element By Position
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        let litleRound = document.createElement("div");
        litleRound.style.cssText = " position:absolute;width:30px;height:30px;background-color:yellow;border-radius: 50%;";
        litleRound.style.top = (topposi + 35) + 'px';
        litleRound.style.left = (left + 35) + 'px';
        mainSection.append(litleRound);
    }
})

