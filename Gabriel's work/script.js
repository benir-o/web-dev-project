let userTokenBalance=0;
let userID;
let kesAmount;
const tokenUnit=20.57;
let initialTokens=0;
let tokenAmount;


const buyTokensButton=document.querySelector('#buyTokens');
buyTokensButton.onclick=buyTokens;
function register() {
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;

  if (email === 'admin@gmail.com' && password === 'Admin') {
    alert('Registration successful!');
    window.location.href = 'welcomepage.html';
  } else {
    alert('Only admin@gmail.com with password Admin is allowed.');
  }
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email === 'admin@gmail.com' && password === 'Admin') {
    alert('Login successful!');
    window.location.href = 'welcomepage.html';
  } else {
    alert('Invalid email or password.');
  }
}

function buyTokens(event){
  const kshAmountInput=document.getElementById('amount')
  const kshAmountValue=Number(kshAmountInput.value);
  if (kshAmountValue < tokenUnit){
    event.preventDefault();
    buyTokensButton.innerText = "Invalid";
    alert("Tokens are purchased from 20 shillings and above");
  }else{
    tokenAmount=kshAmountValue/tokenUnit;
    initialTokens+=tokenAmount;
    alert('Tokens purchased');
    buyTokensButton.innerText = "Success!";
  }
}