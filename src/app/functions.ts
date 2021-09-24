// Importacion de las clases del archivo 'classes.ts'
import { Almacen, Producto, ProductoAlmacen } from "./classes";

// Aplicar la funcion de mover el producto de un almacen a otro indicando la cantidad
export function moverProducto(origen : Almacen, destino : Almacen, producto : Producto, saldo : number){
    //buscar el producto de origen
    let prodOrigen : ProductoAlmacen = origen.buscarProducto(producto)
      //validar la cantidad entera adecuada
      if(prodOrigen.getSaldo() >= saldo){
          let prodDestino:ProductoAlmacen = destino.buscarProducto(producto)
          //mostrar en forma de tabla los productos y almacenes de origen y destino
          console.table(prodOrigen);
          console.table(prodDestino);
          //Disminuye la cantidad de productos del almacen de origen
          prodOrigen.disminuirSaldo(saldo);
          //Aumenta la cantidad de productos del almacen de destino
          prodDestino.aumentarSaldo(saldo);
          //Lectura de datos
          console.log('Moviendo ', saldo,' producto(s) ', producto, 'del ', origen, ' al ', destino);
          console.log('MOVIMIENTO REALIZADO CON EXITO!');
          console.table(prodOrigen);
          console.table(prodDestino);
      }
      else{
        console.log("ERROR: CANTIDAD INVALIDA");
      }
}