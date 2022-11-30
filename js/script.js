function getNewGridSquare () {
    const newSquare = document.createElement('div');

    newSquare.classList.add('ms_square');

    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle('clicked');
    })

    return newSquare;
}




const grid = document.querySelector('div.ms_grid');

for ( i = 1; i <= 100; i++ ) {
    const gridSquare = getNewGridSquare();

    gridSquare.innerHTML = i;

    grid.appendChild(gridSquare);
}