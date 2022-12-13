// BASE PARA ECOMERCE

class alimentos {
    constructor (id,nombre,vencimiento,precio,oferta){
        this.id=id
        this.nombre=nombre
        this.vencimiento=vencimiento
        this.precio=precio
        this.oferta=oferta
    }
    ofertaAcumulada(){
        if (this.oferta === true){
            return 'Usted tiene un descuento del 10% en este producto'
        } else { 
            return 'No tiene descuento en este producto'
            }
    }
}
    

const producto = []


producto.push(
new alimentos (2,'leche','20/12/2023','$200',true),
new alimentos (5,'arroz','20/05/2040','$150',false),
new alimentos (4,'maniKing','20/05/2040','$200',false),
new alimentos (3,'arbejas','20/05/2040','$210',false),
new alimentos (1,'dulceDeLeche','20/05/2040','$300',false),
new alimentos (8,'mantecol','20/05/2040','$350',true),
new alimentos (7,'pan','20/05/2040','$100',false),
new alimentos (6,'alfajorPepito','20/05/2040','$150',true),
new alimentos (0,'azucar','20/05/2040','$120',false)
)

producto.sort((a,b)=>{
    if(a.id < b.id){
        return -1
    } else if (a.id > b.id){
        return 1
    } else {
        return 0
    }
})

console.table(producto)

function filtro (){
    const filtrado = producto.filter(elemento => elemento.oferta === true)
    let ofert = confirm ('Quieres ver las ofertas?')
    if ( ofert === true){
        console.table(filtrado)
        console.log('Estos productos tiene 10% de descuento')
    }
    
}

filtro()


















