// for the tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

const accordion = document.querySelectorAll(".accordion")
const accordionContent = document.querySelectorAll(".accordion_content")
const icon = document.querySelectorAll(".acc_icon")

let currentId;

// for the icons
function activeIcon() {
    Array.from(accordion).map((accordion, i) => {
        accordion.addEventListener("click", () => {
            let current = i;
            Array.from(icon).map((icon, index) => {
                if (current === index) {
                    icon.classList.toggle("hilightIcon")
                    icon.textContent = '-'
                }
                else {
                    icon.classList.remove("hilightIcon")
                    icon.textContent = '+'
                }
            })
        })

    })
}

// for the accordion
function getCurrentId() {
    Array.from(accordion).map((accordion, i) => {
        accordion.addEventListener("click", () => {
            currentId = i;
            Array.from(accordionContent).map((content, index) => {
                if (currentId === index) {
                    content.classList.toggle("showContent")
                }
                else {
                    content.classList.remove("showContent")
                }
            })
        })
    })
    activeIcon()
}

getCurrentId()


