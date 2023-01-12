var numberOfClicks = 0;
var EventActive = true;
var chickenAgressiveness = 0;
let mode = "light"

function toggleDarkMode() {
    if (mode == "light") { mode = "dark" } else { mode = "light" }
    let items = new Array();
    // Add names of the items you want to add the darkmode tag to here (e.g. if you wanted to add another one called "tag", then change it to ["body", "button", "ul", ".fa.fa-grip-lines", "h1", "li", "tag"])
    let names = ["body", "button", "ul", ".fa.fa-grip-lines", "h1", "li"]
    for(let i = 0; i < names.length; i++) {
        items = [...items, ...document.querySelectorAll(names[i])]
    }
    items.forEach(function(item) {
        item.classList.toggle("dark-mode");
    });

    var element =document.getElementById("download-btn")

    if (localStorage.getItem("theme") == "light") {
        element.innerHTML = ' <a href="../photos/babychickens.jpg" download="babychickens.jpg"> <button class="dark-mode"> <i class="fa fa-download"></i> Download </button></a> '
        console.log("Sucess!")
    } else {
        element.innerHTML = ' <a href="../photos/babychickens.jpg" download="babychickens.jpg"> <button class="download"> <i class="fa fa-download"></i> Download </button></a> '
    }
    
}   

function startup() {
    if (localStorage.getItem("theme") == "dark") {
        toggleDarkMode();
    } else if (localStorage.getItem("theme") == null) {
        toggleDarkMode();
    }

    localStorage.setItem("chickAggressiveness", 0)

    var element = document.getElementById("mode-text");
    if (localStorage.getItem("theme") == "dark") {
        element.innerHTML = ' Light Mode <i class="fas fa-power-off"></i></button> ';
        } else {
        element.innerHTML = ' Dark Mode <i class="fas fa-power-off"></i></button> ';
        }
    }


function chicken_agressiveness() {
    chickenAgressiveness = chickenAgressiveness + 1
    localStorage.setItem("chickAggressiveness", chickenAgressiveness )
}

function goHome() {
    window.location.replace("./")
}

document.getElementById("dark-mode").addEventListener("click", function() {
    if (EventActive) {
        numberOfClicks = numberOfClicks + 1;
        toggleDarkMode();
        if (numberOfClicks >= 25) {
            EventActive = false;
        }

        if (localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

    } else {
        if (mode == "dark"){
            toggleDarkMode()
        }
        document.body.classList.toggle("rainbow-mode");

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
