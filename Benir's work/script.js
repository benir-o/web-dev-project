// Example: Create a 3x3 table dynamically

let kesAmount;
function convertCashToTokens(kesAmount) {
  const tokenRate = 20.57;

  if (isNaN(kesAmount) || kesAmount <= 0) {
    return "Please enter a valid amount in shillings.";
  }

  const tokens = kesAmount / tokenRate;
  return tokens.toFixed(2); // rounds to 2 decimal places
}


const rows = 3;
const cols = 3;
const headers=['Amount','TokenAmount','Kwh Purchased'];
const data = [
  [1000, 48.67, '50Kwh'],
  [2000, 97.225, '100Kwh'],
  [3000, 145.84, '140Kwh']
];
const table = document.createElement('table');

//create table head
const thead = document.createElement('thead');
const headRow = document.createElement('tr');
headers.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headRow.appendChild(th);
});
thead.appendChild(headRow);
table.appendChild(thead);

//create table body
const tbody=document.createElement('tbody');
data.forEach(rowData => {
  const tr = document.createElement('tr');
  rowData.forEach(cellData => {
    const td = document.createElement('td');
    td.textContent = cellData;
    tr.appendChild(td);
  });
  table.appendChild(tr);
});

// Append the table to a container in your HTML
document.getElementById('table-container').appendChild(table);