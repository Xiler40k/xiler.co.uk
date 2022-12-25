var numberOfClicks = 0;
var EventActive = true;


function toggleDarkMode(rbm) {
    let items = new Array();
    // Add names of the items you want to add the darkmode tag to here (e.g. if you wanted to add another one called "tag", then change it to ["body", "button", "ul", ".fa.fa-grip-lines", "h1", "li", "tag"])
    let names = ["body", "button", "ul", ".fa.fa-grip-lines", "h1", "li"]
    for(let i = 0; i < names.length; i++) {
        if (rbm && names[i] == "body"){
            continue;
        }
        items = [...items, ...document.querySelectorAll(names[i])]
    }
    items.forEach(function(item) {
        item.classList.toggle("dark-mode");
    });
}   


function startup() {
    if (localStorage.getItem("theme") != "light") {
        toggleDarkMode();
    }
}



document.getElementById("dark-mode").addEventListener("click", function() {
    if (EventActive) {
        numberOfClicks = numberOfClicks + 1;
        toggleDarkMode();
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
