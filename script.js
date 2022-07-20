function generateMessage () {
    let message = Math.floor(Math.random() * 8)
    switch (message) {
        case 0: 
        document.getElementById("result").innerHTML = "I warned you!";
        break;
        case 1: 
        document.getElementById("result").innerHTML = "Hey, that tickles!!";
        break;
        case 2:
        document.getElementById("result").innerHTML = "Please stop!";
        break;
        case 3: 
        document.getElementById("result").innerHTML = "Oh, you're a clever one!";
        break;
        case 4:
        document.getElementById("result").innerHTML = "Do it again, I dare you!";
        break;
        case 5: 
        document.getElementById("result").innerHTML = "Right, that's it! Final warning";
        break;
        case 6:
        document.getElementById("result").innerHTML = "You flirt!";
        break;
        case 7:
        document.getElementById("result").innerHTML = "Plank!";
        break;
        default: 
        document.getElementById("result").innerHTML = "ERROR!";
    }

};




