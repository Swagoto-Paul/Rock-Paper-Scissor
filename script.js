let bot=0;
let you=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgbot=document.querySelector('#bot');
const msgyou=document.querySelector('#you');
const reset=document.querySelector('.btn');

function playgame(youchoice){
    let options=['rock','paper','scissor'];
    let botchoice=options[Math.floor(Math.random()*3)];

    if(youchoice===botchoice){
        msg.innerHTML="DRAW";
        
    }
    else{
        if(youchoice==="rock"){
            botchoice==="paper"?(msg.innerHTML="BOT WINS",bot++,msgbot.innerHTML=bot):botchoice==="scissor"?(msg.innerHTML="YOU WIN",you++,msgyou.innerHTML=you):(msg.innerHTML="BOT WINS",bot++,msgbot.innerHTML=bot);
        }
        else if(youchoice==="paper"){
            botchoice==="scissor"?(msg.innerHTML="BOT WINS",bot++,msgbot.innerHTML=bot):botchoice==="rock"?(msg.innerHTML="YOU WIN",you++,msgyou.innerHTML=you):(msg.innerHTML="BOT WINS",bot++,msgbot.innerHTML=bot);
        }
        else{
            botchoice==="rock"?(msg.innerHTML="BOT WINS",bot++,msgbot.innerHTML=bot):botchoice==="paper"?(msg.innerHTML="YOU WIN",you++,msgyou.innerHTML=you):(msg.innerHTML="BOT WINS",bot++,msgbot.innerHTML=bot);
        }
    }

}

function resetgame()
{
    bot=you=0;
    msgbot.innerHTML=bot;
    msgyou.innerHTML=you;
    msg.innerHTML="PICK YOUR CHOICE";
}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const youchoice=choice.getAttribute("id");
        playgame(youchoice);
    });
});

reset.addEventListener("click",resetgame);
