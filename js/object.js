const Products = [
    {
        name: 'PS5',
        description: 'La consola más potente de Sony al día de la fecha',
        price: 290000,
        stock: true,
        image: 'https://as.com/meristation/imagenes/2020/11/06/reportajes/1604654372_894608_1604656126_noticia_normal.jpg',
        games: ['God of War Origin']
    },
    {
        name: 'PS4',
        description: 'La consola anterior de Sony',
        price: 140000,
        stock: true,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg'
    },
    {
        name: 'PS3',
        description: 'La consola anterior de Sony',
        price: 70000,
        stock: false,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg',
        jostick: true,
        games: ['Uncharted 3']
    },

    {
        name: 'PS2',
        description: 'La consola anterior de Sony',
        price: 30000,
        stock: false,
    },
    {
        name: 'XBOX Series X',
        description: 'La consola más potente de Microsoft al día de la fecha',
        price: 279000,
        stock: true,
        image: 'https://www.atajo.com.ar/images/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01.jpg',
        games: ['Halo Infinite'],
        jostick: true,

    },
    {
        name: 'XBOX One',
        description: 'La consola anterior de Microsoft',
        price: 115000,
        stock: false,
        image: 'https://i.blogs.es/a7dc9c/fc7174d71089999f6a7e15c1d16/1366_2000.png'
    },
    {
        name: 'XBOX 360',
        description: 'La consola de Microsoft que compite con la PS3',
        price: 60000,
        stock: true,
        image: 'https://http2.mlstatic.com/D_NQ_NP_686099-MLA32731207921_112019-O.webp',
    }
]; 

const game = {
    name: 'PS3',
    description: 'La consola anterior de Sony',
    price: 70000,
    stock: false,
    image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg',
    jostick: true,
    games: ['Uncharted 3']
};

for (let product of Products){  //aca se usa of ya que es un array de varios objetos
    console.log(product)
}

for (let prop in game){ //aca se usa in porque al no ser un array no podemos acceder a cada una de las propiedades entonces para hacerlo usamos el in
    console.log(prop) //aca accedo al nombre de cada propiedad
    console.log(`prop = ${prop} - value = ${game[prop]}`) //aca accedo al valor de cada propiedad  
}

// const objectKeys = Object.keys(game) //me da como resultado todas las propiedades como un array
const objectKeys = Object.keys(game).filter(prop => {   //lo que hace esto, es que object tome el valor de los que tengan ps en algun lado de la propiedad
    const propValue = (game[prop]+'').toLowerCase() //lo que hace al sumarle ese espacio es convertir la variable ya de por si en un string
    if(propValue.includes('ps')){
        return true
    }else{
        return false
    }
})
console.log(`objectKeys`, objectKeys)

const objectValues = Object.values(game) //me devuelve todos los valores de cada propiedad del objeto pero como array, lo malo de esto es que se pierde  el nombre de la propiedad

const objectEntries = Object.entries(game) //aca me devuelve un array con un array dentro con 2 valores por casilla del array, osea por propiedad, valor y asi por cada propiedad, la mejor para usar es keys porque es mas sencilla de utilizar

objectEntries.forEach(element =>{ //esta es la forma que dijo el profesor
    console.log(`Prop=${element[0]} --- Value=${element[1]}`)
})

//!!!CORREGIR TIENE QUE HACER LO MISMO QUE EL DE ARRIBA O EL DE ABAJO
// console.log("MI EJERCICIO")
// for(let i=0; i<objectEntries.length; i++ ){ //esta es mi forma que hay que corregir
//     for(let j=0; j<objectEntries[i].length; j++){
//         console.log(`prop = ${objectEntries[i][0]} - value = ${objectEntries[i][j]}`)
//     }
// }

for(let i = 0; i< objectEntries.length; i++){   //esta es la segunda forma que dijo el profesor pero que no se usa
    const propName = objectEntries[i][0]
    const propValue = objectEntries[i][1]
    
    console.log(`Prop=${propName} --- Value=${propValue}`)
} 
console.log("PRUEBA")

//const element = ['name', 'PS5 Pro Max']
//const key = elemento[0]
//const value = elemento[1]

objectEntries.forEach(( [key3, value3])=>{ // esto tambien es destructuracion pero se le envia los valores del 
    
    console.log(`Prop=${key3} --- Value=${value3}`)
})

objectEntries.forEach((element)=>{ //esto es lo de destructuracion(se usa con arrays y con objetos)
    const [key3, value3] = element
    
    console.log(`Prop=${[key3]} --- Value=${[value3]}`)
})

const [key1, value2] = ['name', 'PS5 Pro Max'] //esta es una forma mas sencilla de hacer lo de arriba, se llama destructuracion

// Quedan referenciados
const gameCopy = game; //si lo pongo asi ambos buscan por referencia el mismo valor para hacerlo bien habria que hacer lo siguiente:

// Shallow copy: copia poco profunda pero que rompe esa referencia
const gameCopySpread = {...game}; //osea se va a propagar todas las propiedades de game

// Object assign, nos puede tambien generar una copia de nuestro objeto
const gameCopyAssign = Object.assign({}, game) // lo que hace es que a un objeto vacio como lo definio ahora con los {} o puede tener informacion le asigno nuevas propiedades, como que los fusiona
const gameCopyAssign2 = Object.assign({}, {name: game.name, description: game.description}) //otra forma de hacer un Object Assign pero mandandole variables en particular, podes o no mandarle el objeto entero

// !!!Object.freeze(game);  //lo que hace es congelar el objeto, osea que si intentar modificar algo del objeto no lo vas a poder cambiar

gameCopy.price = 150000
gameCopy['price'] = 2; /*esta es otra forma de acceder al campo*/

console.table(game) // lo que hace console.table() es ordenar al objeto como una tabla, entonces es mas visual

console.table(gameCopy) // lo que hace console.table() es ordenar al objeto como una tabla, entonces es mas visual

console.table(gameCopySpread) // lo que hace console.table() es ordenar al objeto como una tabla, entonces es mas visual

console.table(gameCopyAssign)

//podemos ver la diferencia con lo siguiente:
console.table(Products)
console.log(Products)

//---------------como borrar una propiedad de un objeto
game.image = undefined //lo que borra es el contenido

delete game.image //borra la propiedad

// y si preguntas if(image in game) va a dar false porque ya no esta, siempre que de undefined tambien va a ser falso  
 
//------------------------------------------------------8