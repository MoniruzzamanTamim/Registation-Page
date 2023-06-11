

const formsection = document. querySelector('#formsection');
const formControl = document. querySelectorAll('.form-control');

const nameinput = document.querySelector('#nameinput');
const numberinput = document.querySelector('#numberinput');
const mailinput = document.querySelector('#mailinput');
const passwordinput = document.querySelector('#passwordinput');
const cpinput = document.querySelector('#cpinput');

const nsuccessicon = document.querySelector('#nsuccess-icon');
const ppsuccesscon = document.querySelector('#ppsuccess-icon');
const epsuccess = document.querySelector('#epsuccess-icon');
const psuccess = document.querySelector('#psuccess-icon');
const cpsuccess = document.querySelector('#cpsuccess-icon');

const nerror = document.querySelector('#nerror-icon');
const perro = document.querySelector('#perro-icon');
const eerror = document.querySelector('#eerror-icon');
const passerror = document.querySelector('#passerror-icon');
const cperror = document.querySelector('#cperror-icon');



const nameblank = document.querySelector('.nameblank');
const numberblank = document.querySelector('.numberblank');
const emailblank = document.querySelector('.emailblank');
const passwordblank = document.querySelector('.passwordblank');
const cpblank = document.querySelector('.cpblank');



formsection.addEventListener('submit' , (e)=>{
    e.preventDefault();
    ValidityState();

})

// define the Validation Function
function  ValidityState(){
// zate user age ebong pore spache dile seta remove kore show kore white space remove option
// ata input option k korte hoy
const Name = nameinput.value.trim();
const Number = numberinput.value.trim();
const Mail = mailinput.value.trim();
const password = passwordinput.value.trim();
const ConPassword = cpinput.value.trim();

// Name Validation

if(Name === ""){
    nameblank.innerText = " !This File is Required..";
    nameblank.style.color = 'red';
    nameinput.style.borderColor = 'red';
    nerror.style.display = 'block';
}else if(!nameinput.value.match(/^[A-Z]/)){
    nameblank.innerText = " !Type A-Z First Letter";
    nameblank.style.color = 'red';
    nameinput.style.borderColor = 'red';
    nerror.style.display = 'block';
}else {
    nameblank.innerHTML = '';
    nameblank.style.color = '#9b9b9b';
    nameinput.style.borderColor = '#9b9b9b';
    nsuccessicon.style.display = 'block';
    nerror.style.display = 'none';
}

// number validation
if(Number === ""){
    numberblank.innerText = " !This File is Required..";
    numberblank.style.color = 'red';
    numberinput.style.borderColor = 'red';
    perro.style.display = 'block';
}else if(!numberinput.value.match(/^[0-1][0-9]/)){
    numberblank.innerText = "Please Type 01 and Total 11 Digit....";
    numberblank.style.color = 'red';
    numberinput.style.borderColor = 'red';
    perro.style.display = 'block';
}else{
    numberblank.innerText = " ";
    numberblank.style.color = '#9b9b9b';
    numberinput.style.borderColor = '#9b9b9b';
    perro.style.display = 'none';
    epsuccess.style.display = 'block';
}

// Email VAlidation
if(Mail === ""){
    emailblank.innerText = " !This File is Required..";
    emailblank.style.color = 'red';
    mailinput.style.borderColor = 'red';
    eerror.style.display = 'block';
}else if(!mailinput.value.match(/^[a-z0-9]*[@][a-z]{2,6}[\.][a-z]{2,3}$/)){
    emailblank.innerText = "Please valid Gmail-please....";
    emailblank.style.color = 'red';
    mailinput.style.borderColor = 'red';
    eerror.style.display = 'block';
}else{
    emailblank.innerText = "";
    emailblank.style.color = '#9b9b9b';
    mailinput.style.borderColor = '#9b9b9b';
    eerror.style.display = 'none';
    epsuccess.style.display = 'block';
   
}
//  password validation

if(password === ""){
    passwordblank.innerHTML ='!This File is Required..';
    passwordblank.style.color= "red";
    passwordinput.style.borderColor = 'red';
    passerror.style.display = 'block';

} else if(!passwordinput.value.match(/^[A-Z]{1,10}[a-z0-9]{5,20}[@@]$/ )){
        passwordblank.innerHTML =' Please Type Capital Leeter First ant minimum 8 charecter';
        passwordblank.style.color= "red";
        passwordinput.style.borderColor = 'red';
        passerror.style.display = 'block';
  

    }else{
        passwordblank.innerHTML =' ';
        passwordblank.style.color= "#9b9b9b";
        passwordinput.style.borderColor = '#9b9b9b';
        passerror.style.display = 'none';
        psuccess.style.display = 'block';
    
    }

    if(ConPassword === ""){
        cpblank.innerHTML ='!This File is Required..';
        cpblank.style.color= "red";
        cpinput.style.borderColor = 'red';
        cperror.style.display = 'block';

    }else{
            // password match
   if(passwordinput.length != 0 ){
    if(passwordinput.value === cpinput.value){
        cpblank.innerHTML= 'Password MAtch';
        cpblank.style.color= "#9b9b9b";
    }else{
        cpblank.innerHTML= 'Password Wrong';
        cpblank.style.color= "red";
        cpinput.style.borderColor = 'red';
    }
   }
    }
  



}



nameinput.addEventListener('input',()=>{
    if(!nameinput.value.match(/^[A-Z]/)){
        nameblank.innerText = " !Type A-Z First Letter";
        nameblank.style.color = 'red';
        nameinput.style.borderColor = 'red';
        nerror.style.display = 'block';
        return false
    }else {
        nameblank.innerHTML = '';
        nameblank.style.color = '#9b9b9b';
        nameinput.style.borderColor = '#9b9b9b';
        nsuccessicon.style.display = 'block';
        nerror.style.display = 'none';
        return true;
    }
})

numberinput.addEventListener('input',()=>{
    if(!numberinput.value.match(/^[0-1][0-9]/)){
        numberblank.innerText = "Please Type 01 and Total 11 Digit....";
        numberblank.style.color = 'red';
        numberinput.style.borderColor = 'red';
        perro.style.display = 'block';
        return false;
    }else{
        numberblank.innerText = " ";
        numberblank.style.color = '#9b9b9b';
        numberinput.style.borderColor = '#9b9b9b';
        perro.style.display = 'none';
        ppsuccesscon.style.display = 'block';
        return true;
    }
    
})

mailinput.addEventListener('input', ()=>{
   if(!mailinput.value.match(/^[a-z0-9]*[@][a-z]{2,6}[\.][a-z]{2,3}$/)){
        emailblank.innerText = "Please valid Gmail-please....";
        emailblank.style.color = 'red';
        mailinput.style.borderColor = 'red';
        eerror.style.display = 'block';
        return false;
    }else{
        emailblank.innerText = "";
        emailblank.style.color = '#9b9b9b';
        mailinput.style.borderColor = '#9b9b9b';
        eerror.style.display = 'none';
        epsuccess.style.display = 'block';
        return true;
    }
})

// / password validation

passwordinput.addEventListener("input" , ()=>{
    if(!passwordinput.value.match(/^[A-Z]{1,10}[a-z0-9]{5,20}[@@]$/ )){
        passwordblank.innerHTML =' Please Type Capital Leeter First ant minimum 8 charecter';
        passwordblank.style.color= "red";
        passwordinput.style.borderColor = 'red';
        passerror.style.display = 'block';
     return false;
 
    }else{
        passwordblank.innerHTML =' ';
        passwordblank.style.color= "#9b9b9b";
        passwordinput.style.borderColor = '#9b9b9b';
        passerror.style.display = 'none';
        psuccess.style.display = 'block';
 
  
     return true;
 
    }
   
 })
 





