var button = document.querySelectorAll(".drum");

for (var i = 0; i < button.length; i ++) {
    button[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        titleTransition(this.innerHTML);
    });

    button[i].addEventListener("keypress", function(e) {
        makeSound(e.key);
        buttonAnimation(e.key);
        titleTransition(this.innerHTML);
    });
}

function makeSound(e) {
    var audio = "";

    switch (e) {
        case ("w"):
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case ("a"):
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case ("s"):
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case ("d"):
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case ("j"):
            audio = new Audio("./sounds/snare.mp3");
            break;
        case ("k"):
            audio = new Audio("./sounds/crash.mp3");
            break;
        case ("l"):
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        default:
            console.log("Invalid Key!");
    }
    audio.play();
}

function buttonAnimation(e) {
    var currentButton = document.querySelector("." + e);

    currentButton.classList.add("pressed");

    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 250);
}

function titleTransition(e) {
    var title = document.getElementsByTagName("h1")[0].innerHTML;
    var textHighlight = "";

    switch (e) {
        case ("w"):
            document.getElementsByTagName("h1")[0].innerHTML = "Tom-1";
            document.getElementsByTagName("h1")[0].style.color = "red";
            break;
        case ("a"):
            document.getElementsByTagName("h1")[0].innerHTML = "Tom-2";
            document.getElementsByTagName("h1")[0].style.color = "orange";
            break;
        case ("s"):
            document.getElementsByTagName("h1")[0].innerHTML = "Tom-3";
            document.getElementsByTagName("h1")[0].style.color = "yellow";
            break;
        case ("d"):
            document.getElementsByTagName("h1")[0].innerHTML = "Tom-4";
            document.getElementsByTagName("h1")[0].style.color = "green";
            break;
        case ("j"):
            document.getElementsByTagName("h1")[0].innerHTML = "Snare";
            document.getElementsByTagName("h1")[0].style.color = "blue";
            break;
        case ("k"):
            document.getElementsByTagName("h1")[0].innerHTML = "Crash";
            document.getElementsByTagName("h1")[0].style.color = "navy";
            break;
        case ("l"):
            document.getElementsByTagName("h1")[0].innerHTML = "Kick-Bass";
            document.getElementsByTagName("h1")[0].style.color = "violet";
            break;
        default:
            console.log("Error occured!");
    }

    setTimeout(function() {
        document.getElementsByTagName("h1")[0].innerHTML = "Drum 🥁 Kit";
    }, 500)
}