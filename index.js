let id = 0;
let holeScore = 0;
console.log(holeScore);
document.getElementById('add').addEventListener('click', () => {
    holeScore = (document.getElementById('new-hole-strokes').value)-(document.getElementById('new-hole-par').value);
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = "Hole " + (document.getElementById('new-hole').value);
    row.insertCell(1).innerHTML = document.getElementById('date-played').value;
    row.insertCell(2).innerHTML = document.getElementById('new-hole-par').value;
    row.insertCell(3).innerHTML = document.getElementById('new-hole-strokes').value;
    holeScoreColored(holeScore, scoreColorClass(holeScore), row);
    console.log(scoreColorClass(holeScore));
    let actions = row.insertCell(5);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-hole').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);

    };
    return btn;
}

function scoreColorClass(score) {
    if(score < 0) {
        return 'text-success'
    } else if(score === 0) {
        return 'text-light'
    } else if(score > 0) {
        return 'text-danger'
    }
};

function holeScoreColored(score, color, row) {
    let cell = row.insertCell(4);
    cell.className = color;
    cell.innerHTML = score;
    cell.id = id;
    return cell;
}