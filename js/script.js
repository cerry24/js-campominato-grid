function getNewGridSquare () {
    const newSquare = document.createElement('div');

    newSquare.classList.add('ms_square');

    newSquare.addEventListener('click', function(){
        newSquare.classList.toggle('clicked');
    })

    return newSquare;
}







const btnPlay = document.getElementById('ms_btn-play');

btnPlay.addEventListener('click', function() {
    const main = document.querySelector('main');
    const grid = document.querySelector('div.ms_grid');

    main.classList.toggle('bg-aquamarine');

    for ( i = 1; i <= 100; i++ ) {
        const gridSquare = getNewGridSquare();

        gridSquare.innerHTML = i;

        grid.appendChild(gridSquare);
    }
})