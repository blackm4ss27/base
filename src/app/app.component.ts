import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
}


// #
// //PRIMERA FORMA QUE VA MAS O MENOS BIEN
// console.log('BIENVENIDOS A LA TIENDA DE CRHISTIAN');

// class Producto{
//   nombreP: string;
//   codigo: string;
//   precio: number;
//   saldo: number;

//   constructor(nombreP: string, codigo: string, precio: number, saldo: number){
//     this.nombreP = nombreP;
//     this.codigo = codigo;
//     this.precio = precio;
//     this.saldo = saldo;
//   }
// }

// class Almacen{
//   nombreAl: string;
//   p1: Producto;
//   p2: Producto;
//   p3: Producto;

//   constructor(nombreAl: string, p1: Producto, p2: Producto, p3: Producto){
//     this.nombreAl = nombreAl;
//     this.p1 = p1;
//     this.p2 = p2;
//     this.p3 = p3;
//   }
// }

// var prod1 = new Producto('Guitarra','abc',2000,10);
// var prod2 = new Producto('Bajo','def',1800,8);
// var prod3 = new Producto('Bateria','ghi',5500,5);
// var prod4 = new Producto('Microfono','jkl',1200,3);
// var prod5 = new Producto('Sintetizador','mno',4800,4);
// var prod6 = new Producto('Amplificador','pqr',6700,2);

// var al1 = new Almacen('AL1', prod1, prod4, prod6);
// var al2 = new Almacen('AL2', prod2, prod3, prod6);
// var al3 = new Almacen('AL3', prod5, prod1, prod2);


// console.table(al1)
// console.table(al2)
// console.table(al3)
// //FIN DE LA PRIMERA FORMA
// #

//=======================================================================================

// // //SEGUNDA FORMA A VER
// interface Producto{
//   nombre: string,
//   codigo: string,
//   precio: number,
//   almacen: Almacen,
//   movimiento: (valor : number) => void
// }

// interface Almacen{
//   nombreAlm: string,
//   cantidad:number
// }

// const prod1: Producto = {
//   nombre: 'Guitarra',
//   codigo: 'abc',
//   precio: 2000,
//   almacen: {
//     nombreAlm: 'ALMACEN - 1',
//     cantidad: 10
//   },
//   movimiento(valor : number){
//     this.almacen.cantidad += valor;
//   }
// }
// // //fin de la 2da forma

//00000000000000000000000000000000000000000000000000000000000000000000000000000000

//=========== TERCERA FORMA :'V

// Importacion de elementos de los respectivos archivos
import { Almacen, Producto, ProductoAlmacen} from './classes';
import { moverProducto } from './functions';

// Creacion de Almacenes
let alm1 : Almacen = new Almacen('ALMACEN UNO','ALM-01');
let alm2 : Almacen = new Almacen('ALMACEN DOS','ALM-02');
let alm3 : Almacen = new Almacen('ALMACEN TRES','ALM-02');

// Creacion de Productos
const guitarra : Producto = new Producto('Guitarra Gibson','P001-gtr',2000);
const bajo : Producto = new Producto('Bajo Fender','P002-bss',1800);
const bateria : Producto = new Producto('Bateria Pearl','P003-drm',5500);
const microfono : Producto = new Producto('Microfono Shure','P004-mcr',1000);

//Inicializar VACIO en el almacen UNO
export const VacioInicial : ProductoAlmacen = new ProductoAlmacen(microfono,0,alm1)

// Inventario en ALMACEN UNO
const alm1guitarra : ProductoAlmacen = new ProductoAlmacen(guitarra, 20, alm1);
alm1.agregarProducto(alm1guitarra);
const alm1bajo : ProductoAlmacen = new ProductoAlmacen(bajo, 15, alm1);
alm1.agregarProducto(alm1bajo);
const alm1bateria : ProductoAlmacen = new ProductoAlmacen(bateria, 10, alm1);
alm1.agregarProducto(alm1bateria);

// Inventario en ALMACEN DOS
const alm2guitarra : ProductoAlmacen = new ProductoAlmacen(guitarra, 5, alm2);
alm2.agregarProducto(alm2guitarra);
const alm2bajo : ProductoAlmacen = new ProductoAlmacen(bajo, 15, alm2);
alm2.agregarProducto(alm2bajo);
const alm2bateria : ProductoAlmacen = new ProductoAlmacen(bateria, 1, alm2);
alm2.agregarProducto(alm2bateria);

// Inventario en ALMACEN TRES
const alm3guitarra : ProductoAlmacen = new ProductoAlmacen(guitarra, 1, alm3);
alm3.agregarProducto(alm3guitarra);
const alm3bajo : ProductoAlmacen = new ProductoAlmacen(bajo, 2, alm3);
alm3.agregarProducto(alm3bajo);
const alm3bateria : ProductoAlmacen = new ProductoAlmacen(bateria, 3, alm3);
alm3.agregarProducto(alm3bateria);

//Ejecutar el metodo de mover productos
moverProducto(alm1, alm2, bateria, 2);