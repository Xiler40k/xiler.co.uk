var numberOfClicks = 0;
var EventActive = true;
  
document.getElementById("dark-mode").addEventListener("click", function() {
    if (EventActive) {
        numberOfClicks = numberOfClicks + 1;
        document.body.classList.toggle("dark-mode");
        document.querySelector("button").classList.toggle("dark-mode");
        document.querySelector("ul").classList.toggle("dark-mode");
        document.querySelector(".fa.fa-grip-lines").classList.toggle("dark-mode");
        document.querySelector("h1").classList.toggle("dark-mode");
        const listItems = document.querySelectorAll("li");
        console.log("Still in process")
        listItems.forEach(function(li) {
            li.classList.toggle("dark-mode");
        });
        if (numberOfClicks === 50) {
            EventActive = false;
        }
    } else {
        document.body.classList.toggle("rainbow-mode");
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
