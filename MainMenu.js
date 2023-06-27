//Signing up page
let userName=document.getElementById("TxtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateinput(){
    //check username is empty
    if(userName.value.trim()===""){
        onError(userName, "User Name cannot be empty");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(username,"Email cannot be empty");
    }else{
        if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm password not matching");
        }
        else
        onSuccess(conPwd);
    }
}

document.querySelector("button")
.addEventListener("click", (event)=>{
    event.preventDefault();
    validateinput();
});

function  onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    messageEle.innerText="";
    parent.classlist.remove("error");
    parent.classlist.add("success");
}
function  onError(input,message){
    let parent=userName.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText="User Name cannot be empty";
    parent.classlist.add("error");
    parent.classlist.remove("success"); 
}

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
