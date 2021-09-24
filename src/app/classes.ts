import { VacioInicial } from "./app.component";

// CREACION DE LAS CLASES

// Clase Producto y atributos
export class Producto{ 
    constructor(
      private nombreProd: string,
      private codigoProd: string,
      private precioProd: number
    ){}
}

// Clase ProductoAlmacen y atributos
export class ProductoAlmacen{
    constructor(
      private producto: Producto,
      private saldo: number,
      private almacen: Almacen
    ){}
    //Metodos de la calse ProductoAlmacen
    public getProducto(){
      return this.producto;
    }
  
    public getSaldo(){
      return this.saldo;
    }
  
    public aumentarSaldo(aux:number){
      this.saldo = this.saldo + aux;
    }
  
    public disminuirSaldo(aux:number){
      this.saldo = this.saldo + aux;
    }
}

// Clase Almacen y atributos
export class Almacen{
     
    constructor(
      private nombreAlmacen: string,
      private codigoAlmacen: string,
      private productos:ProductoAlmacen[]=[]
  )   {}
    //Metodos de la clase Producto
    public agregarProducto(producto:ProductoAlmacen){
      this.productos.push(producto)
    }
    public buscarProducto(producto:Producto){  
      let resultado = this.productos.find((prodObjetivo)=>
      prodObjetivo.getProducto() == producto);
      if(resultado == null){
        return VacioInicial;
      }
      return resultado;
      }
    
}