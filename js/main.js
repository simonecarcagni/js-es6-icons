

const iconsArray = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

const containerDom = document.getElementById('container');
const selettoreDom = document.getElementById('selettore');

iconsArray.forEach(element => {
    element.color = generateRandomColor();
});

selettoreDom.addEventListener('change', function(){

    const selected = this.value;

    if (selected == ""){
        createBox(iconsArray, containerDom);
    }   else {
        const filtered = iconsArray.filter(element => {
            if (selected == element.type){
                return true;
            } else {
                return false;
            }
        });
       createBox(filtered, containerDom);
    }

});

function createBox(icons, container){

    container.innerHTML = '';

    icons.forEach(elemento => {

        container.innerHTML += `<div class="box">
                                        <div class="txt-align">
                                        <i style="color: ${elemento.color}" class="fa-solid ${elemento.prefix}${elemento.name}"></i>
                                        <h5>${elemento.name}</h5>
                                        </div>
                                        </div>`;

    });

}



function generateRandomColor(){

    let randomColor = "#";

    const listValue = "0123456789ABCDEF";
    
    for (let i = 0; i < 6 ; i++){
        
        const randomNumber = generateRandomNumber(0, listValue.length - 1);
        randomColor += listValue[randomNumber];
        
    }

    return randomColor;
}

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

