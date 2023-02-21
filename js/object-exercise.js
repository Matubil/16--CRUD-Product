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

//Obtener el body de la tabla para poder modificarlo desde JS
const tableBody = document.getElementById('table-body')
// const tableBody = document.querySelector('#table-body') tambien se puede usar este metodo

//definir una funcion para iterar el array
function renderizarTabla(){
    //iterar el array para acceder a cada producto
    tableBody.innerHTML = "" //lo que hace esto o para lo que está es para que cada vez que se cargue la funcion, se borre toda la tabla
    Products.forEach((producto) =>{    
        let imageSrc = '/assets/images/no-product.png'; //se declara esto para que cuando no haya una imagen, se cargue esa imagen por defecto
        if(producto.image){ //esta es una de las formas de preguntar si tiene un valor 
            imageSrc = producto.image;       
        }

        //!! let imageSrc = producto.image ? producto.image : '/assets/images/no-product.png'; esta seria tora forma de preguntar el let y el if, con el operador ternario
        //otra foram de preguntar seria:
        /* if('image' in producto)
        otra seria
            if(producto.hasOwnProperty('image')) tambien pregunta si dentro del objeto tiene esa propiedad*/
        const tableRow = `
                            <tr class="product">
                                <td class="product__img-cell">
                                    <img class= "product__img" src="${imageSrc}" width="120px" alt="${producto.name}">                    
                                </td>
                                <td class= "product__name">
                                    ${producto.name}
                                </td>
                                <td class= "product__desc">
                                    ${producto.description}    
                                </td>
                                <td class= "product__price">
                                    $ ${producto.price}
                                </td>
                                <td class= "product__other">
                                    📦🎮
                                </td>
                                <td class= "product__actions">
                                    🟥✏️⭐
                                </td>
                            </tr>`

                            tableBody.innerHTML += tableRow
        //Introducir dentro del tbody una fila por producto con sus respectivas celdas
    })
}

renderizarTabla()

function addProduct(evt){
    evt.preventDefault(); //esto se pone porque la pagina se vive recargando, entonces se pone eso para que no se recargue la pagina
    console.dir(evt.target); //puedo ver las cosas que trae por defecto ese evento
    console.log(evt.target);

    const elements = evt.target.elements
    // console.dir(elements.price.value)
    // console.dir(elements.name.value)
    // console.dir(elements.description.value)
    // console.dir(elements.image.value)
    // console.dir(elements.stock.checked) //en los campos que son checkbox hay que fijarse la funcion checked, no la value
    // console.dir(elements.joysctick.checked)
    // console.log(elements.stock.checked)
    // console.log(elements.joysctick.checked)

    const newProduct = {
        name: elements.name.value,
        description: elements.description.value,
        price: elements.price.valueAsNumber, //la propiedad valueAsNumber, ahi esta el valor del numero en int, en value esta el valor en string, por eso con console.dir(evt.target.price) podemos ver todos los campos que tiene y sus valores
        image: elements.image.value,
        stock: elements.stock.checked,
        joystick: elements.joystick.checked,
        games: elements.games.value
    };

    const newFormData = new FormData(evt.target);
    const newProductFormData = Object.fromEntries(newFormData); //aca ya tengo el objeto ya armado
    newProductFormData.stock = newProductFormData.stock ? true : false //aca pregunta si tiene algo stock entonces que devuelva true, sino false
    newProductFormData.joystick = newProductFormData.joystick ? true : false //aca pregunta si tiene algo stock entonces que devuelva true, sino false
    newProductFormData.price = +newProductFormData.price; //lo convierte en int

    console.log(newProduct)

    Products.push(newProduct)//lo que estamos haciendo es cargar nuestro producto en la lista de productos

    console.log(Products)

    renderizarTabla()

    evt.target.reset() //resetea a la altura del form para que siga cargando

    elements.name.focus(); //esta tambien le deja el focus del puntero ahi en el elemento name de la tabla
}

/*
<tr>
    <td>
        <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/08/portada-ps5-scaled-1.jpeg?fit=2560%2c1707&quality=55&strip=all&ssl=1" width="120px" alt="">                    
    </td>
    <td>
        LAPTOP
    </td>
    <td>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem dolorem reprehenderit, atque laborum aperiam.
    </td>
    <td>
        $ 150000
    </td>
    <td>
        📦🎮
    </td>
    <td>
        🟥✏️⭐
    </td>
</tr>
*/