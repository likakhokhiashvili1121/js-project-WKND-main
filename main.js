
let container=document.querySelector(".container")
let loader=document.querySelector(".loader")


setTimeout(function () {
container.classList.add("containerBlock")
loader.classList.add("loaderOff")
}, 10000);




let account = document.querySelector(".account")
let signUp = document.querySelector(".signUp")


account.addEventListener("click", function () {
    signUp.classList.toggle("toggle")
})



let searchIcon = document.querySelector(".searchIcon");
let searchBar = document.querySelector(".searchBar");
let hasPlaceHolder = true;
searchIcon.addEventListener("click", function () {
    searchBar.classList.toggle("toggle2")

    if (hasPlaceHolder == true) {
        searchBar.removeAttribute("placeholder")
        hasPlaceHolder = false
    } else {
        searchBar.setAttribute("placeholder", "search")
        hasPlaceHolder = true;
    }
})



let burger=document.querySelector(".burgerImg")
let react=document.querySelector(".react")
let menu = ["MAGAZINE", "ADVENTURES", "FAQ", "ABOUT US"]
let p1 = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let p4 = document.createElement("p")
let y=true; 


burger.addEventListener("click",function(){
    react.classList.toggle("toggle3")
    setTimeout(()=>{
    if(y==true){
        p1.innerHTML = "MAGAZINE"
        p1.classList.add("list")
        p2.innerHTML = "ADVENTURES"
        p2.classList.add("list")
        p3.innerHTML = "FAQ"
        p3.classList.add("list")
        p4.innerHTML = "ABOUT US"
        p4.classList.add("list")
        react.append(p1, p2, p3, p4)
        y=false
    }else{
        react.innerHTML=""
        y=true
    }
   
    },1000)
})


let massive = [["./images/surati1.jpg", "SOKHUMI", "https://en.wikipedia.org/wiki/Sukhumi"], ["./images/surati2.jpg", "KUTEISI", "https://en.wikipedia.org/wiki/Kutaisi"], ["./images/surati3.jpg", "SAMARGALO","https://en.wikipedia.org/wiki/Zugdidi"]]



let circle1=document.querySelector(".circle1")
let circle2 = document.querySelector(".circle2")
let circle3 = document.querySelector(".circle3")

let img=document.querySelector(".images")
let h4=document.querySelector("h4")
let anchor=document.querySelector(".anchor")
let i=0;
img.src = "./images/surati1.jpg"
h4.innerHTML="SOKHUMI"
anchor.href = "https://en.wikipedia.org/wiki/Sukhumi"
let buttonBack = document.querySelector(".bt-back")
let buttonNext=document.querySelector(".bt-next")
buttonNext.addEventListener("click", function next() {


    i++

    if (i == 3) {
        i = 0

    }

    img.src = massive[i][0];
    h4.innerHTML = massive[i][1]
    anchor.href=massive[i][2]



    if (i == 0) {
        circle1.classList.add("switchOn")
        circle2.classList.remove("switchOn")
        circle3.classList.remove("switchOn")

    } else if (i == 1) {
        circle1.classList.remove("switchOn")
        circle2.classList.add("switchOn")
        circle3.classList.remove("switchOn")
    } else if (i == 2) {
        circle1.classList.remove("switchOn")
        circle2.classList.remove("switchOn")
        circle3.classList.add("switchOn")
    }



}

 )
buttonBack.addEventListener("click", function back() {

    if (i == 0) {
        i = 3
    }
    i--
    if (i == 0) {
        circle1.classList.add("switchOn")
        circle2.classList.remove("switchOn")
        circle3.classList.remove("switchOn")

    } else if (i == 1) {
        circle1.classList.remove("switchOn")
        circle2.classList.add("switchOn")
        circle3.classList.remove("switchOn")
    } else if (i == 2) {
        circle1.classList.remove("switchOn")
        circle2.classList.remove("switchOn")
        circle3.classList.add("switchOn")
    }

    img.src = massive[i][0];
    h4.innerHTML = massive[i][1]
    anchor.href = massive[i][2]
})



    




let data
await fetch("./API.json").then((Response)=>Response.json()).then((json)=>{data=json})
console.log(data);

let section3=document.querySelector(".section3")


data.map((item)=>{
    let card=document.createElement("div")
    section3.appendChild(card)
    let image=document.createElement("img")
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    card.append(image,p1,p2)
    image.setAttribute("src", item.img)
    image.classList.add("grid-image")
    p1.innerHTML=item.txt1;
    p2.innerHTML=item.txt2;
    p2.style.marginTop="40px"
    p1.style.marginTop="20px"

})


window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>=300){
        section3.style.marginLeft="5%"
    }
})


let section4=document.querySelector(".section4")
let card1=document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")



card1.addEventListener("mouseover", function(){
    section4.classList.add("change")
    section4.classList.remove("change1")
    section4.classList.remove("change2")
    
    
})

card1.addEventListener("mouseleave",function(){
    // section4.classList.remove("change")
})

card2.addEventListener("mouseover", function () {
    section4.classList.add("change1")
    section4.classList.remove("change")
    section4.classList.remove("change2")
})

card2.addEventListener("mouseleave", function () {
    // section4.classList.remove("change1")
})


card3.addEventListener("mouseover", function () {
    section4.classList.add("change2")
    section4.classList.remove("change1")
    section4.classList.remove("change")
    
})

card3.addEventListener("mouseleave", function () {
    // section4.classList.remove("change2")
})


let button1=document.querySelector(".button1")
let info=document.querySelector(".info")

button1.addEventListener("click",function(){
    info.classList.toggle("showup")
})
