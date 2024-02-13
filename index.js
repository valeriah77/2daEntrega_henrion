//ARRAY QUE CONTIENE LISTA DE PRECIOS DE PRODUCTOS A GRANEL//

const PRODUCTOS_GRANEL=
[   {ID:1, prod:"lentejas", peso:250, precio:2000 },
    {ID:2, prod:"lentejasColoradas", peso:250, precio:2400 },
    {ID:3, prod:"lentejones", peso:250, precio:2600 },
    {ID:4, prod:"garbanzos", peso:250, precio:2050 },
    {ID:5, prod:"arrozSushi", peso:250, precio:2600 },
    {ID:6, prod:"arrozIntegral", peso:250, precio:5000 },
    {ID:7, prod:"arrozYamani", peso:250, precio:2600 },
    {ID:8, prod:"arrozNegro", peso:250, precio:2040 },
    {ID:9, prod:"nuecesPecanPeladas", peso:250, precio:2400 },
    {ID:10, prod:"nuecesPeladas", peso:250, precio:2040 },
    {ID:11, prod:"almendras", peso:250, precio:2899 },
    {ID:12, prod:"castañasCaju", peso:250, precio:5000 },
    {ID:13, prod:"mani", peso:250, precio:2690 },
    {ID:14, prod:"maniTostado", peso:250, precio:2800 },
    {ID:15, prod:"avellanas", peso:250, precio:2700 }
]

console.log(PRODUCTOS_GRANEL);

//FUNCION PARA APLICAR 1ER AJUSTE A LA LISTA DE PRECIOS DE PRODUCTOS A GRANEL

const AJUSTE= 0.23
const PRODUCTOS_GRANEL_AJUSTE1= PRODUCTOS_GRANEL.map(function(productosArray){
    return{
    Id: productosArray.ID,
    prod : productosArray.prod,
    peso : productosArray.peso,
    precio : productosArray.precio*(1+AJUSTE)
}})


console.log (PRODUCTOS_GRANEL_AJUSTE1)


///FUNCION PARA SUMAR CARRITO DE COMPRAS////


/* const PRECIO_TOTAL= PRODUCTOS_GRANEL.reduce(function
(acumulador, prod){
    return
    acumulador + prod.precio;
},0)


console.log(PRECIO_TOTAL); */


//BLOQUE QUE PERMITE AL USUARIO CALCULAR EL TOTAL DE UNA COMPRA 



do{
const ID= parseFloat(prompt("engrese el id de producto que quiere llevar"))

if (!isNaN (ID))
{
    const PRECIO_TOTAL= PRODUCTOS_GRANEL.reduce(function
        (acumulador, ID){
            return
            acumulador +ID.precio;
        },0)
    
    continuar= prompt ("desea sumar otro producto (si-no)").toLowerCase()
}

else
{
    alert ("Ingrese un numero valido");
    continuar= "si"
}

}


while (continuar=== "si")
{
console.log (`El total de la compra es : ${PRECIO_TOTAL}`)
}

