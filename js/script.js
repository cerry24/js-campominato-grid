const grid = document.getElementById('ms_grid');

for ( i = 1; i <= 100; i++ ) {
    const gridSquare = document.createElement('div');

    gridSquare.innerHTML = i;

    grid.appendChild(gridSquare);
}