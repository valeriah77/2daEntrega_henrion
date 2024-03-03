//ARRAY QUE CONTIENE LISTA DE PRECIOS DE PRODUCTOS A GRANEL//



const PRODUCTOS=
[   {ID:1, prod:"lentejas", peso:250, imagen: "https://placehold.co/600x400", precio:2000 },
    {ID:2, prod:"lentejasColoradas", peso:250,imagen: "https://placehold.co/600x400", precio:2400 },
    {ID:3, prod:"lentejones", peso:250, imagen: "https://placehold.co/600x400",precio:2600 },
    {ID:4, prod:"garbanzos", peso:250, imagen: "https://placehold.co/600x400", precio:2050 },
    {ID:5, prod:"arrozSushi", peso:250, imagen: "https://placehold.co/600x400",precio:2600 },
    {ID:6, prod:"arrozIntegral", peso:250, imagen: "https://placehold.co/600x400", precio:5000 },
    {ID:7, prod:"arrozYamani", peso:250, imagen: "https://placehold.co/600x400",precio:2600 },
    {ID:8, prod:"arrozNegro", peso:250, imagen: "https://placehold.co/600x400",precio:2040 },
    {ID:9, prod:"nuecesPecanPeladas", peso:250, imagen: "https://placehold.co/600x400",precio:2400 },
    {ID:10, prod:"nuecesPeladas", peso:250,imagen: "https://placehold.co/600x400", precio:2040 },
    {ID:11, prod:"almendras", peso:250,imagen: "https://placehold.co/600x400", precio:2899 },
    {ID:12, prod:"castañasCaju", peso:250,imagen: "https://placehold.co/600x400", precio:5000 },
    {ID:13, prod:"mani", peso:250, imagen: "https://placehold.co/600x400",precio:2690 },
    {ID:14, prod:"maniTostado", peso:250, imagen: "https://placehold.co/600x400",precio:2800 },
    {ID:15, prod:"avellanas", peso:250, imagen: "https://placehold.co/600x400", precio:2700 }
]

console.log(PRODUCTOS);



//FUNCION PARA APLICAR 1ER AJUSTE A LA LISTA DE PRECIOS DE PRODUCTOS A GRANEL

const AJUSTE= 0.23
const PRODUCTOS_AJUSTE1= PRODUCTOS.map(function(productosArray){
    return{
    Id: productosArray.ID,
    prod : productosArray.prod,
    peso : productosArray.peso,
    precio : productosArray.precio*(1+AJUSTE)
}})


console.log (PRODUCTOS_AJUSTE1)




//CARRITO DE COMPRA 



let cantidadItemsCarrito=0;

let carrito= JSON.parse(localStorage.getItem ('carrito'))|| [];


//funcion contador 
function actualizarCarrito () {
    const iconoCarrito = document.getElementById ('cantidad-items');
    if (iconoCarrito){
        iconoCarrito.textContent = cantidadItemsCarrito
    }


}

//funcion Mostrar items carrito
function mostrarItemsCarrito (){
    const contenedorItemsCarrito = document.getElementById ('items-carrito');
    contenedorItemsCarrito.innerHTML= '';
    carrito.forEach(productos => {
        const item = document.createElement ('div');
        item.textContent = productos.nombre;
        
    });
    contenedorItemsCarrito.appendChild (item);
    
        
    }

    //funcion para las tarjetas
    function crearTarjetaProducto (){
        const contenedor = document.getElementById('contenedor-productos');
        PRODUCTOS.forEach (producto=> {
            const tarjeta= document.createElement ('div');
            tarjeta.classlist.add ('tarjeta-producto');
           
            const imagen= document.createElement ('img');
            imagen.src=producto.imagen;
            imagen.alt=producto.nombre; 
            imagen.classlist.add= ('imagen-producto');
            tarjeta.appendChild (imagen)

            const nombre= document.createElement ('h3');
            nombre.textContent =producto.nombre;
            nombre.classList.add ('nombre-producto');
            tarjeta.appendChild (nombre)

           const precio= document.createElement ('p');
           precio.textContent= producto.precio;
           precio.classlist.add ('precio-producto');
           tarjeta.appendChild (precio)

            const botonCompra= document.createElement ('button');
            botonCompra.textContent = 'agregar producto';
            botonCompra.classList.add ('boton-compra');
            botonCompra.addEventListener ('click', ()=>{
                carrito.push (producto);
                localStorage.setItem ('carrito', JSON.stringify (carrito));
                cantidadItemsCarrito++;
                actualizarCarrito();
                mostrarItemsCarrito();

            })
         

            tarjeta.appendChild (botonCompra)
            contenedor.appendChild(tarjeta);

        })

    
    }

//llamamos a las funciones 


