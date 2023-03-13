

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

iconsArray.forEach((elemento) => {

    if(elemento.color == 'orange'){
        containerDom.innerHTML +=      `<div class="box">
                                        <div class="txt-align">
                                        <i style="color: orange" class="fa-solid ${elemento.prefix}${elemento.name}"></i>
                                        <h5>${elemento.name}</h5>
                                        </div>
                                        </div>`
    } else if (elemento.color == 'green') {
        containerDom.innerHTML +=      `<div class="box">
                                        <div class="txt-align">
                                        <i style="color: green" class="fa-solid ${elemento.prefix}${elemento.name}"></i>
                                        <h5>${elemento.name}</h5>
                                        </div>
                                        </div>`
    } else if (elemento.color == 'blue') {
        containerDom.innerHTML +=      `<div class="box">
                                        <div class="txt-align">
                                        <i style="color: blue" class="fa-solid ${elemento.prefix}${elemento.name}"></i>
                                        <h5>${elemento.name}</h5>
                                        </div>
                                        </div>`
    }
});

const selettoreDom = document.getElementById('selettore');

selettoreDom,addEventListener('change', function(){
    
})

