function setCookie(mode, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "mode=" + mode + ";" + expires + ";path=/";
  }



document.getElementById("dark-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("button").classList.toggle("dark-mode");
    document.querySelector("ul").classList.toggle("dark-mode");
    const listItems = document.querySelectorAll("li");
    listItems.forEach(function(li) {
        li.classList.toggle("dark-mode");
    });
});
  
function changeModeText() {
    var element = document.getElementById("mode-text");
    if (element.innerHTML.includes("Dark")) {
        element.innerHTML = ' Light Mode <i class="fas fa-power-off"></i></button> ';
        } else {
        element.innerHTML = ' Dark Mode <i class="fas fa-power-off"></i></button> ';
        }
    }
