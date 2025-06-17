let userTokenBalance=0;
let userID;
const tokenUnit=20.57;
let initialTokens=0;


const checkBalanceButton=document.querySelector('#checkBalance');
const buyTokensButton=document.querySelector('#testButton');
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
function buyTokens(Kshamount){
    if (Kshamount<tokenUnit){
        //Tell user invalid input
    }else{
        let token=Kshamount/tokenUnit;
        initialTokens+=token;
    }
    return initialTokens;
}
function viewHistory(){}
function viewUsage(){}
function sendTokens(){}

