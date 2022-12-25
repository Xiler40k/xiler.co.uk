var numberOfClicks = 0;
var EventActive = true;
  
function startup() {
if  (localStorage.getItem("theme") == "light") {
} else {
    console.log("is working");
    document.body.classList.toggle("dark-mode");
    document.querySelector("button").classList.toggle("dark-mode");
    document.querySelector("ul").classList.toggle("dark-mode");
    document.querySelector(".fa.fa-grip-lines").classList.toggle("dark-mode");
    document.querySelector("h1").classList.toggle("dark-mode");
    const listItems = document.querySelectorAll("li");
    listItems.forEach(function(li) {
        li.classList.toggle("dark-mode");
    });
    }
}

document.getElementById("dark-mode").addEventListener("click", function() {
    if (EventActive) {
        numberOfClicks = numberOfClicks + 1;
        document.body.classList.toggle("dark-mode");
        document.querySelector("button").classList.toggle("dark-mode");
        document.querySelector("ul").classList.toggle("dark-mode");
        document.querySelector(".fa.fa-grip-lines").classList.toggle("dark-mode");
        document.querySelector("h1").classList.toggle("dark-mode");
        const listItems = document.querySelectorAll("li");
        listItems.forEach(function(li) {
            li.classList.toggle("dark-mode");
        });
        if (numberOfClicks === 50) {
            EventActive = false;
        }

        if (localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

    } else {
        document.body.classList.toggle("rainbow-mode");
        document.querySelector("button").classList.toggle("dark-mode");
        document.querySelector("ul").classList.toggle("dark-mode");
        document.querySelector(".fa.fa-grip-lines").classList.toggle("dark-mode");
        document.querySelector("h1").classList.toggle("dark-mode");
        const listItems = document.querySelectorAll("li");
        listItems.forEach(function(li) {
            li.classList.toggle("dark-mode");
        });
        console.log("Worked");
    } 
});

function changeModeText() {
    var element = document.getElementById("mode-text");
    if (element.innerHTML.includes("Dark")) {
        element.innerHTML = ' Light Mode <i class="fas fa-power-off"></i></button> ';
        } else {
        element.innerHTML = ' Dark Mode <i class="fas fa-power-off"></i></button> ';
        }
    }
