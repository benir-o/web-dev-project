let userTokenBalance=0;
let userID;
let kesAmount;
const tokenUnit=20.57;
let initialTokens=0;
let tokenAmount;


const checkBalanceButton=document.querySelector('#checkBalance');
const buyTokensButton=document.querySelector('#buyTokens');
const viewHistoryButton=document.querySelector('#viewHistory');
const viewUsageButton=document.querySelector('#viewUsage');
const sendTokensButton=document.querySelector('#sendTokens');

const tokenUsers=[{
    name:"John",
    tokenAmount:30
},{
    name:"Kenya",
    tokenAmount:40
}]


checkBalanceButton.onclick=checkUserBalance;
buyTokensButton.onclick=buyTokens;
viewHistoryButton.onclick=viewHistory;
viewUsageButton.onclick=viewUsage;
sendTokensButton.onclick=sendTokens;

function checkUserBalance(){}

function buyTokens(event) {
     // Prevent form submission
    const kshAmountInput = document.getElementById('kenyanAmount');
    const kshAmountValue = Number(kshAmountInput.value);
    if (kshAmountValue < tokenUnit) {
        event.preventDefault();
        buyTokensButton.innerText = "Invalid";
        alert("Tokens are purchased from 20 shillings and above");
    } else {
        tokenAmount=kshAmountValue/tokenUnit;
        initialTokens+=tokenAmount;
        buyTokensButton.innerText = "Success!";
    }
}
function viewHistory(){}
function viewUsage(){}
function sendTokens(){}

