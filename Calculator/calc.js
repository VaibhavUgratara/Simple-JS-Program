var op=""
var c=0,b=0
function add(){
    var v1=Number(document.getElementById("entry").value)
    b=b+v1
    op="+"
    c=c+1
    document.getElementById("ans").innerHTML=(b)
    document.getElementById("entry").value=""
}
function sub(){
    var v1=Number(document.getElementById("entry").value)
    b=b-v1
    op="-"
    c=c+1
    document.getElementById("ans").innerHTML=(b)
    document.getElementById("entry").value=""
}
function mul(){
    var v1=(document.getElementById("entry").value)
    if(v1==''){
        v1=1
    }
    else{
        v1=Number(v1)
    }
    if(c==0){
        b=1
    }
    b=b*v1
    op="*"
    c=c+1
    document.getElementById("ans").innerHTML=(b)
    document.getElementById("entry").value=""
}
function div(){
    var v1=(document.getElementById("entry").value)
    var k=true
    if(v1==''){
        v1=1
    }
    else if(v1=='0' || v1=='00'){
        document.getElementById("ans").innerHTML=("Cannot divide by zero")
        k=false
        b=0
    }
    else{
        v1=Number(v1)
        console.log(v1)
    }
    if(c==0 && k){
        b=v1
    }
    else if(c!=0 && k){
        b=b/v1
    }
    op="/"
    c=c+1
    if(k){
    document.getElementById("ans").innerHTML=(b)
    }
    document.getElementById("entry").value=""
}
function res(){
    if(op=="+"){
        add()
    }
    else if(op=="-"){
        sub()
    }
    else if(op=="*"){
        mul()
    }
    else if(op=="/"){
        div()
    }
    op=""
}
function clea(){
    op=""
    c=0
    b=0
    document.getElementById("entry").value=""
    document.getElementById("ans").innerHTML="<br>"
}
function clear_en(){
    document.getElementById("entry").value=""
}
function d(){
    var v1=document.getElementById("entry").value
    v1=v1.slice(0,(v1.length - 1))
    document.getElementById("entry").value=v1
}
function writ(n){
    var v=document.getElementById("entry").value
    v=v+n
    document.getElementById("entry").value=v
}