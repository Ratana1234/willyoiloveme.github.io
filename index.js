const question=document.querySelector(".question");
const gif=document.querySelector(".gif");
const yesBtn=document.querySelector(".yes-btn");
const noBtn=document.querySelector(".no-btn");
yesBtn.addEventListener("click",function(){
    question.innerHTML="Yeayyy I Love You🙈❤️";
    gif.src="https://media.tenor.com/rLsTS3eQiyoAAAAi/tonton-friends-tobi.gif";
    noBtn.style.display="none";
    yesBtn.style.marginLeft="30px"
})
noBtn.addEventListener("mouseover",()=>{
    const noBtnRect= noBtn.getBoundingClientRect();
    const maxX=window.innerWidth - noBtnRect.width;
    const maxY=window.innerHeight - noBtnRect.height;
    const rendomX=Math.floor(Math.random() * maxX);
    const rendomY=Math.floor(Math.random() * maxY);
    noBtn.style.left=rendomX + "px";
    noBtn.style.top=rendomY + "px";
})


