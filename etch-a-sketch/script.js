const containergrid = document.querySelector('.container-grid');
const containerbtn = document.querySelector('.container-btn');
const btn = document.createElement('button');
btn.classList.add('btn-popup');
btn.innerHTML = 'Pop';
containerbtn.append(btn);

let drawGrid = (grid) => {
    cleanGrid();
    size = 960/grid
    for (let i=0; i<grid; i++){
        let content = document.createElement('div')
        content.classList.add('div-wrapper');
        containergrid.appendChild(content);
        for (let j=0; j<grid; j++){
            wrapper = document.querySelector('.div-wrapper:last-child');
            let content = document.createElement('div')
            content.classList.add('div-box');
            content.style.width = size;
            content.style.height = size;
            wrapper.appendChild(content);
        };
    };
    addHover();
};

let addHover = () => {
    document.querySelectorAll('.div-box').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('div-box-color');
        });
    });
};

let cleanGrid = () => {
        containergrid.textContent = '';
    }
    
    
    grid = 100;
    drawGrid(grid);

document.querySelector('.btn-popup').addEventListener('click', () => {
    gridSelection = prompt("pop up");
    drawGrid(gridSelection);
});
