
function otpGenerator(){
let otpshow = document.getElementById('otp');
let digits = '0123456789';
let otp = '';
for(let i=0; i<4; i++){
  otp += digits[Math.floor(Math.random()*10)];
}
otpshow.innerHTML='<span></span>';
setTimeout(() =>{
  otpshow.innerHTML=otp;
},1000);
}