class Password{
    constructor(){
        this.passwd=""
        this.chars="abcdefghijkl"
        this.nums="1234567890"
        this.specialChars="!@#$%^&*"
        this.password_arr=[this.chars,this.nums,this.specialChars]
        this.funnypassword=["password","ineedapassword","changeme","secret","iamforgetful","newpassword","IamACompleteIdiot","nothing","nothingagain","iforgot","whydoialwaysforget","qwerty","asdf","aslpls","user","YouWontGuessThisOne",'PasswordShmashword',"youmoron","doubleclick","iamnottellingyoumypw","masterpassword","yetanotherpassword",'nomorepasswords',"password123","myonlypassword","cantremember","dontaskdonttell","memorysucks","earlyalzheimers","passwordforoldpeople"]
    }
    genWeakPassword(len){
        if(len<5){
            return "No Password Generated"
        }
        this.passwd=""
        for(let i=0;i<len;i++){
            this.passwd+=this.password_arr[0][Math.floor(Math.random()*this.password_arr[0].length)]
        }
        return this.passwd
    }

    genStrongPassword(len){
        if(len<5){
            return "No Password Generated"
        }
        this.passwd=""
        for(let i=0;i<len;i++){
            let x=Math.floor(Math.random()*3)
            this.passwd+=this.password_arr[x][Math.floor(Math.random()*this.password_arr[x].length)]
        }
        return this.passwd
    }
    genFunnyPassword(){
        return this.funnypassword[Math.floor(Math.random()*this.funnypassword.length)]
    }
}


const alert_display=(mode=1)=>{
    if(mode==1){
        func.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Oops!!</strong> Fill all the fields!
   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </div>`+ func.innerHTML
    }

    else{
        func.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Oops!!</strong> Length of password must be 5 or above!
   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </div>`+ func.innerHTML
    }
}

let p=new Password()
let l_pass=document.getElementById("lengthPass")
let s_pass=document.getElementById("strongPassword")
let w_pass=document.getElementById("weakPassword")
let f_pass=document.getElementById("funnyPassword")

let f=document.forms["pass_form"]


f.addEventListener("submit",(e)=>{
    e.preventDefault();
    let len=f["lengthPass"].value
    if(len === "" && (f_pass.checked==false)){
        alert_display()
        return
    }
    let weak=f["weakPassword"].checked
    let strong=f["strongPassword"].checked
    if(weak){
        let ans=p.genWeakPassword(len)
        if(ans==="No Password Generated"){
            alert_display(2)
        }
        else{
            f["generatedPass"].value=ans
        }
    }
    else if(strong){
        let ans=p.genStrongPassword(len)
        if(ans==="No Password Generated"){
            alert_display(2)
        }
        else{
            f["generatedPass"].value=ans
        }
    }
    else{
        let ans=p.genFunnyPassword()
        f["generatedPass"].value=ans
    }
})


s_pass.addEventListener("change",()=>{
    l_pass.disabled=false
})

w_pass.addEventListener("change",()=>{
    l_pass.disabled=false
})

f_pass.addEventListener("change",()=>{
    l_pass.disabled=true
    l_pass.value=null
})