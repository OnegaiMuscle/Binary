function displayStatus(e) {
  console.log(e.checked)
  const z = e.checked
  const spans = document.querySelectorAll("span")
}

function showTooltip(elem) {
  document.getElementById('tooltipText').style.visibility = 'visible';
}


function updateValue(cell, row, col) {
  var table = document.getElementById('spreadsheet');
  var input = table.rows[row].cells[col].getElementsByTagName('input')[0];
  input.value = cell.value;
}

