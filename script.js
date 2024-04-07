function changee(e) {
  e.preventDefault()
  e.target.checked = !e.target.checked

}


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

document.addEventListener('DOMContentLoaded', (event) => {
  let isMouseDown = false;
  let startCell = null;
  let endCell = null;
  const table = document.getElementById('spreadsheet');

  function selectCells(start, end) {
    table.querySelectorAll('.selected').forEach(cell => {
      cell.classList.remove('selected');
    });

    for (let i = Math.min(start.row, end.row); i <= Math.max(start.row, end.row); i++) {
      for (let j = Math.min(start.col, end.col); j <= Math.max(start.col, end.col); j++) {
        const cell = table.rows[i].cells[j];
        cell.classList.add('selected');
      }
    }
  }

  table.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    const cell = e.target.closest('td');
    startCell = { row: cell.parentNode.rowIndex, col: cell.cellIndex };
    selectCells(startCell, startCell);
    e.preventDefault(); // Empêche la sélection de texte
  });

  table.addEventListener('mouseover', (e) => {
    if (!isMouseDown) return;
    const cell = e.target.closest('td');
    endCell = { row: cell.parentNode.rowIndex, col: cell.cellIndex };
    selectCells(startCell, endCell);
  });

  document.addEventListener('mouseup', (e) => {
    if (isMouseDown) {
      isMouseDown = false;
      selectCells(startCell, endCell);
    }
  });
});


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.color = 'green';
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const player = new Player(canvas.width / 2, canvas.height - 40);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  requestAnimationFrame(animate);
}

animate();


function selectCellule(ligne, colonne) {
  // On récupère la table
  var table = document.querySelector('table');

  // On récupère la ligne spécifique (tr), -1 car les indices commencent à 0
  var row = table.rows[ligne - 1];

  // On vérifie si la ligne existe
  if(row) {
    // On récupère la cellule spécifique (td), -1 car les indices commencent à 0
    var cell = row.cells[colonne - 1];

    // On vérifie si la cellule existe
    if(cell) {
      // Ici, vous pouvez effectuer des opérations sur la cellule, par exemple :
      cell.style.backgroundColor = 'yellow'; // Met en surbrillance la cellule
      return cell; // Retourne la cellule sélectionnée
    } else {
      console.log('La cellule n\'existe pas');
    }
  } else {
    console.log('La ligne n\'existe pas');
  }
}

// Utilisation de la fonction
selectCellule(3, 2); // Sélectionne la cellule à la 3ème ligne et 2ème colonne
