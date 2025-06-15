// Example: Create a 3x3 table dynamically
const rows = 3;
const cols = 3;
const headers=['Amount','TokenAmount','Kwh Purchased'];
const data = [
  ['Alice', 24, 'Engineer'],
  ['Bob', 30, 'Designer'],
  ['Carol', 28, 'Manager']
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