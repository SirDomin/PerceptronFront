class Grid {
    constructor(container, columns = 5, rows = 7) {
        this.container = container;
        this.columns = columns;
        this.rows = rows;
    }

    fillGrid() {
        for (let x = 0; x < this.rows; x++) {
            for (let y = 0; y < this.columns; y++) {
                this.addElement(x, y);
            }
        }
    }

    addElement(column, row) {
        let width = this.container.offsetWidth - 2;
        let height = this.container.offsetHeight - 1;

        let node = document.createElement('div');
        node.className = 'matrix_element';
        node.style.width = `${width / this.columns}px`;
        node.style.height = `${height / this.rows}px`;
        node.setAttribute('row', row);
        node.setAttribute('column', column);

        node.addEventListener('click', () => {
            node.classList.toggle('active');
        })

        this.container.appendChild(node);
    }

    toMatrix() {
        let matrix = [];
        for (let x = 0; x < this.rows; x++) {
            matrix[x] = [];
        }

        [...this.container.children].forEach(child => {
            matrix[child.getAttribute('column')][child.getAttribute('row')] = (child.classList.contains('active') ? 1 : 0);
        })

        return matrix;
    }

    clearActive() {
        [...this.container.children].forEach(child => {
            child.classList.remove('active');
        })
    }
}