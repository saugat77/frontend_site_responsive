const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});


    window.onload =function (){
        var bodyFontSize = localStorage.getItem('bodyFontSize');
        let invertColor = localStorage.getItem('invertColor');
        if(invertColor === null || invertColor === "0"){
            invertColor = "";
        }else{
            invertColor = "filter: invert(1);background:black;";
        }
        document.getElementsByTagName("body")[0].style = "font-size:"+bodyFontSize+"%;"+invertColor;
    };
    function invertColor(){
        let invertColor = localStorage.getItem('invertColor');
        if(invertColor === "1"){
            document.getElementsByTagName("body")[0].style.filter = "";
            document.getElementsByTagName("body")[0].style.background = "";
            localStorage.setItem('invertColor',"0");
        }else if(invertColor === "0" || invertColor === null){
            document.getElementsByTagName("body")[0].style.filter = "invert(100%)";
            document.getElementsByTagName("body")[0].style.background = "black";
            localStorage.setItem('invertColor',"1");
        }
    }

    function changeFont(operation){
        var decreaseLimit = 70;
        var increaseLimit = 130;
        var bodyFontSize = localStorage.getItem('bodyFontSize');
        if(bodyFontSize === null){
            bodyFontSize = 100;
        }
        if(operation === "increase"){
            if(bodyFontSize < increaseLimit){
                bodyFontSize = parseInt(bodyFontSize) + 10;
            }
        }else if(operation === "decrease"){
            if(bodyFontSize > decreaseLimit){
                bodyFontSize = parseInt(bodyFontSize) - 10;
            }
        }else{
            bodyFontSize = 100;
        }
        localStorage.setItem('bodyFontSize', bodyFontSize)
        document.getElementsByTagName("body")[0].style.fontSize = bodyFontSize+"%";
    }
    //Language Switcher
    function languageSwitcher(){
        window.location.href = "https://www.immigration.gov.np/switch";
    }