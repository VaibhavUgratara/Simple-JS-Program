let hrs=document.getElementById("hours")
var x;
hrs.innerHTML=`<option selected>Hours</option>`
for(let i=1;i<13;i++){
    hrs.innerHTML+=`<option value="${i}">${i}</option>`
}

let mins=document.getElementById("mins")
mins.innerHTML=`<option selected>Minutes</option>`
for(let i=0;i<60;i++){
    mins.innerHTML+=`<option value="${i}">${i}</option>`
}


let alr_form=document.forms["alarm_form"]
alr_form.addEventListener(("submit"),(e)=>{
    e.preventDefault()
    let hrs=alr_form["hours"].value
    let mins=alr_form["mins"].value
    let ampm=alr_form["am-pm"].value
    if(hrs==="Hours" || mins==="Minutes"){
        func.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Oops!!</strong> Fill all the fields!
   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`+ func.innerHTML
    }
    else{
        let params=[Number.parseInt(hrs),Number.parseInt(mins),ampm]
        x=setInterval(call_alarm,1000,...params)
}
})


function call_alarm(hrs,mins,ampm){
    let d=new Date()
    let h=d.getHours()
    let m=d.getMinutes()
    let ap=""
    if(h>=12){
        if(h>12){
            h-=12
        }
        ap="P.M."
    }
    else if(h<12){
        if(h===0){
            h=12
        }
        ap="A.M."
    }
    func.innerHTML=`<p class="text-center">Alarm Set</p>`
    if(hrs===h && mins===m && ap===ampm){
        func.innerHTML=""
        let img=document.getElementById("clock")
        img.src="icons8-alarm-clock.gif"
        let audio =new Audio("super-mario-64-alarm-clock-110801.mp3")
        audio.play()
        clearInterval(x)
        back()
    }
}
const back=()=>{
    setTimeout(()=>{
        let img=document.getElementById("clock")
        img.src="icons8-alarm-clock-96.png"
    },60000)
}