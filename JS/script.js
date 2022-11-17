
(function () {
    document.getElementById("myHeading").innerHTML = "Sofian Hussain";
    document.querySelector("nav ul li").setAttribute("class", "currentPage")

    let firstLink = document.querySelector("nav ul li a")
    firstLink.setAttribute("href", "https://www.google.co.uk")

    let myBtn = document.getElementById("myTestEvent");

    // myBtn.onclick = functionq(){
    //     console.info("I was clicked.... again");
    // }
    myBtn.addEventListener("click", myFunction)
    function myFunction(ev) {
        console.info("Finally the best way!")
        console.dir(ev.target)
        ev.target.style.backgroundColor = red
    }


    let redBtn = document.querySelector(".red")
    let myBodyElement = document.querySelector("body")
    redBtn.addEventListener("click", function () {
        myBodyElement.setAttribute("class", "redBack")
    })

    let greenBtn = document.querySelector(".green")
    myBodyElement = document.querySelector("body")
    greenBtn.addEventListener("click", function () {
        myBodyElement.setAttribute("class", "greenBack")
    })

    let blueBtn = document.querySelector(".blue")
    myBodyElement = document.querySelector("body")
    blueBtn.addEventListener("click", function () {
        myBodyElement.setAttribute("class", "blueBack")
    })

    let resetBtn = document.querySelector(".reset")
    myBodyElement = document.querySelector("body")
    resetBtn.addEventListener("click", function () {
        myBodyElement.removeAttribute("class")
    })
})()
