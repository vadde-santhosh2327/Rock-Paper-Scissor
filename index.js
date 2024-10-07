let a=document.querySelectorAll(".bt1")
let com=["Stone","Paper","Scissor"]
let a1=document.getElementById("ch1")
let a2=document.getElementById("ch2")
let res=document.getElementById("kk")
let res1=document.getElementById("kk1")
let res2=document.getElementById("kk2")
a.forEach(b=>{
b.addEventListener("click",()=>{
    // document.getElementById("ch1").innerHTML="User's Choice: " + b.textContent;
    let userchoice=b.textContent;
    a1.innerHTML="User's Choice : " + userchoice;
    const random = Math.floor(Math.random() * com.length);
    const randomChoice = com[random];
    a2.innerHTML="Computer Choice: " + randomChoice
    if (userchoice==randomChoice)
    {
         res.innerHTML="Its a draw!! 👍👍"
         res.style.color="violet"
    }
    else if (userchoice=="Stone" && randomChoice=="Scissor"|| userchoice=="Paper" && randomChoice=="Stone" || userchoice=="Scissor" && randomChoice=="Paper"){
        res.innerHTML="You Win!! 🥳🥳"
        res.style.color="green "
    }
   else{
    res.innerHTML="Compuer Win 😖 <u> Try it again </u>"
    res.style.color="red "
   }
})
})


