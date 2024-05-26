const variablesCarrito = (producto = " ", precioTotal = 0, cantidadTotal = 0, agregarProducto = false, precioTotalAcumulativo = 0, cantidadTotalAcumulativa = 0);

const cantidadCorrecta = (cantidadTotal) => {
    while (Number.isNaN(cantidadTotal) || cantidadTotal === 0 || cantidadTotal < 0) {
        if (cantidadTotal !== 0){
            alert("Debes agregar una cantidad valida.");
        }
        else {
            alert("Debes agregar una cantidad valida.");
        }
        cantidadTotal = parseInt(prompt("Cantidad a comprar: "));
    }
    return cantidadTotal;
}

do {
    producto = prompt("Que producto desea comprar? Gorra, Remera o Ambas");
    cantidadTotal = parseInt(prompt("Cantidad a comprar: "));
    producto = producto.toUpperCase(producto);
    let cantidadValidada = cantidadCorrecta(cantidadTotal);
    if (cantidadValidada){
        switch (producto) {
            case "GORRA":
                precioTotal = 1500;
                break;
            case "REMERA":
                precioTotal = 2000;
                break;
            case "AMBAS":
                precioTotal = 3500;
                break;
            default:
                alert("El producto no esta disponible!")
                cantidadTotal = 0;
                precioTotal = 0;
                break;
        }
        precioTotal = precioTotal * cantidadValidada;
        precioTotalAcumulativo += precioTotal;
        cantidadTotalAcumulativa += cantidadValidada;
        alert("Productos agregados " + cantidadValidada + " = " + precioTotal);
        agregarProducto = confirm("Desea agregar otro producto?");
    }
    if (agregarProducto == false){
        continue;
    }
} while (agregarProducto);
let finalizarCompra = confirm("Desea finalizar su compra?")
if (finalizarCompra){
    alert("Resumen de compra: " + cantidadTotalAcumulativa + " productos " + "que equivalen a " + precioTotalAcumulativo + " pesos.")
}
else{
    alert("Aqui nos despedimos.")
}