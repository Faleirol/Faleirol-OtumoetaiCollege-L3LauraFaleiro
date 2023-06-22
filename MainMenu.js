//Signing up page
let userName=document.getElementById("TxtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

function validateinput(){
    //check username is empty
    if(userName.value.trim()===""){
       let parent=userName.parentElement;
       let messageEle=parent.querySelector("small");
       messageEle.style.visibility="visible";
       messageEle.innerText="User Name cannot be empty";
    }else{
        let parent=userName.parentElement;
       let messageEle=parent.querySelector("small");
       messageEle.style.visibility="hidden";
       messageEle.innerText="";
    }
}

document.querySelector("button")
.addEventListener("click", (event)=>{
    event.preventDefault();
    validateinput();
});

function  onSuccess(input,message){

}
function  onError(input,message){
    
}