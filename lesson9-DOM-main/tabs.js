const tabsBtns = document.querySelectorAll(".tab");
const tabsTexts = document.querySelectorAll(".cont");

for (let i = 0; i < tabsBtns.length; i++) {
    tabsBtns[i].addEventListener("click", () => {
        
        if (tabsTexts[i].classList.contains("open")) {
            tabsTexts[i].classList.remove("open")
        } else {
            tabsTexts.forEach((text) => {
                text.classList.remove("open")
            })
            tabsTexts[i].classList.add("open")
        }

    })
}



// btn.style.backgroundColor = "red";
