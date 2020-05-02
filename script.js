var headerBGSelect=document.querySelector("#headerbgcolor");
var header=document.querySelector("header");
var slideshowEl=document.querySelector(".slideshow")
var optionCountEl=document.querySelector("#optionCount")
var leftArrow=document.querySelector(".fa-arrow-left")
var rightArrow=document.querySelector(".fa-arrow-right")
var textField=document.querySelector("#message")
var memeOutputEL=document.querySelector(".memeoutput")

var images=["./assets/cardi.jpg","./assets/drake.jpg","./assets/grinch.jpeg", "./assets/joker.jpg","./assets/spongebob.jpg"]
var names=["cardi", "drake", "grinch", "joker", "spongebob"]
let count=1;

headerBGSelect.onchange=(e)=>{
        var color=e.target.value;
        header.style.setProperty("--color",color)
        document.querySelector(".selectBtn").style.setProperty("--color",color)
}

optionCountEl.innerHTML=count;




function renderSlideDiv(){

    slideshowEl.innerHTML=""
         
    var html = `<div class='slidePanelDiv'>
        <img style="height:50px" src=${images[count-1]} alt="img">
        <h4>${names[count-1]}</h4>
        <button onclick=grabMemeData('${images[count-1]}') class='selectBtn' data-img=${images[count-1]}>Select</button>
        </div>`

        slideshowEl.innerHTML=html;
            }


renderSlideDiv()


leftArrow.onclick=()=>{
    console.log("leftArrowFx fired")
    if(count === 1){
        return
    }
    count--
    renderSlideDiv()
}


rightArrow.onclick=()=>{
    console.log('rightArrowFx fired')
    if(count === images.length){
        return
    }
    count++
    renderSlideDiv()
}


function grabMemeData(src){
    memeOutputEL.innerHTML=""
        console.log(src);
        console.log(textField.value)

        var html=`<div class='memeDiv'>
        <img style="height:200px" src=${src} alt="img">
        <h2>${textField.value}</h2>
        </div>`

        memeOutputEL.innerHTML=html;

        textField.value=""


       
}
    