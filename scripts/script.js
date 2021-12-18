let grid = new Grid(document.getElementById('container'), 5, 7);

document.body.onload = () => {
    grid.fillGrid();
}

document.getElementById('send_button').onclick = () => {
    console.log(grid.toMatrix());
}

document.getElementById('clear_button').onclick = () => {
    grid.clearActive();
}