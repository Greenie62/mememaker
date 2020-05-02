var headerBGSelect=document.querySelector("#headerbgcolor");
var header=document.querySelector("header");
var slideshowEl=document.querySelector(".slideshow")
var optionCountEl=document.querySelector("#optionCount")
var leftArrow=document.querySelector(".memeprv")
var rightArrow=document.querySelector(".memenext")
var textField=document.querySelector("#message")
var memeOutputEL=document.querySelector(".memeoutput")
var footerEl=document.querySelector(".footer")
var textLeftArrow=document.querySelector(".textleft")
var textRightArrow=document.querySelector(".textright")
var textUpArrow=document.querySelector(".textup")
var textDownArrow=document.querySelector(".textdown")

var images=["./assets/cardi.jpg","./assets/drake.jpg","./assets/grinch.jpeg", "./assets/joker.jpg","./assets/spongebob.jpg"]
var names=["cardi", "drake", "grinch", "joker", "spongebob"]
let count=1;

headerBGSelect.onchange=(e)=>{
        var color=e.target.value;
        header.style.setProperty("--color",color)
        footerEl.style.backgroundColor=color
        document.querySelector(".selectBtn").style.backgroundColor=color
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
    optionCountEl.innerHTML=count
}


rightArrow.onclick=()=>{
    console.log('rightArrowFx fired')
    if(count === images.length){
        return
    }
    count++
    renderSlideDiv()
    optionCountEl.innerHTML=count
}


function grabMemeData(src){
    memeOutputEL.innerHTML=""
        console.log(src);
        console.log(textField.value)

        var html=`<div class='memeDiv'>
        <img style="height:200px" src=${src} alt="img">
        <h2 class='h2Text'>${textField.value}</h2>
        </div>`

        memeOutputEL.innerHTML=html;

        textField.value=""


       
}

let left=10;
let topPx=10;

textLeftArrow.onclick=()=>{
    left-=5
    document.querySelector(".h2Text").style.setProperty("--left",left)
   
}

textRightArrow.onclick=()=>{
    left+=10
    document.querySelector(".h2Text").style.setProperty("--left",left)
   
}


textUpArrow.onclick=()=>{
    topPx-=10
    document.querySelector(".h2Text").style.setProperty("--top",topPx)
   
}

textDownArrow.onclick=()=>{
    topPx+=5
    document.querySelector(".h2Text").style.setProperty("--top",topPx)
   
}
    