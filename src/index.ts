// let mensaje: string = "Hola mundo";
// mensaje = "chanchito feliz";

// mensaje = "Chao Mundo";
// console.log(mensaje);
// console.log(typeof []);

// /**
//  * Tipos de JS
//  * number
//  * string
//  * boolean
//  * null
//  * undefined
//  * object
//  * function
//  *
//  * Tipos de TS
//  * any (no usarlo)
//  * unknown
//  * never
//  * arrays
//  * tuplas
//  * Enums
//  *
//  * Tipos Inferidos
//  *
//  */

// let extincionDinosaurios: number = 76_000_000;
// let dinosaurioFavorito: string = "T-REX";
// let extintos = true;

// //colocar any de manera adrede. pero no deberia utilizarse
// function dinosaurio(config: any) {
//   return config;
// }

// let animales: string[] = ["chanchito", "feliz", "felipe"];
// let nums: number[] = [1, 2, 3];
// let checks: boolean[] = [];
// let nums2: Array<number> = [];

// // animales.map(x=> x.) // auto completado dependiendo el tipo de dato. cualidad de typescript.

// /**
//  * la tupa no mas de 3 argumentos. lo ideal 2
//  * tiene un error typescript con las tupla.push(12) no va marcar un error.
//  */

// let tupla: [number, string] = [1, "chanchito feliz"];
// let tupla2: [number, string[]] = [1, ["chanchito feliz", "chachito felipe"]];

// /**
//  *
//  * Enums
//  * PascalCase
//  */

// enum Talla {
//   Chica = "s",
//   Mediana = "m",
//   Grande = "l",
//   ExtraGrande = "xl",
// }

// const variable1 = Talla.Mediana;
// console.log(variable1);

// // estados de carga. estado de uso mas real

// const enum LoadingState {
//   Idle,
//   Loading,
//   Success,
//   Error,
// }

// //optimiza mejor el código en su compilación
// const estado = LoadingState.Success;

// /**
//  * Objeto
//  */

// /**
//  *
//  * definir en el modelado el tipo de dato que se encuentra en la base de dato. de esa forma cualquier objeto lo establecemos y solamente le definimos el tipo de dato que debe obtener dicho objeto.
//  *
//  *
//  */

// // objeto.id = 42; //no se puede re escribir el valor por eso se usa el readonly

// // definiciones

// type Direccion = {
//   numero: number;
//   calle: string;
//   pais: string;
// };

// type Persona = {
//   readonly id: number;
//   nombre: string;
//   talla: Talla;
//   direccion: Direccion;
// };

// //construccion del objeto compuesto

// const objeto: Persona = {
//   id: 2,
//   nombre: "hola mundo",
//   talla: Talla.Mediana,
//   direccion: {
//     numero: 1,
//     calle: "Siempre viva",
//     pais: "Chanchitolandia",
//   },
// };

// const arr: Persona[] = [];

// /**
//  * funciones
//  */

// const fn: () => number = () => {
//   //te protege a que siempre devuelvas algo
//   let x = 2;
//   if (x > 5) {
//     return 7;
//   } else {
//     return 4;
//   }
// };

// // otra alternativa

// const fn1: () => number = () => {
//   let x = 2;
//   if (x > 5) {
//     return 7;
//   }

//   return 4;
// };

// //void - sin return

// const fn2: () => void = () => {
//   //cuando una funcion no devuelve nada. no tiene un return y por ende se usa el "void"
// };

// // funciones con parametros, te obliga al uso de parametro

// const fn3: (a: number) => number = (edad: number) => {
//   return edad;
// };

// //cambiar el tipo de retorno de la funcion

// const fn4: (a: number) => string = (edad: number) => {
//   if (edad > 17) {
//     return "puedes ingresar";
//   }

//   return "no puedes ingresar";
// };

// //function declarativa, establece el uso del parametro y ademas te obliga a retorna algo

// function validarEdad(edad: number, msg: string): string {
//   if (edad > 17) {
//     return `Puedes ingresar ${msg}`;
//   }
//   return "No puedes ingresar";
// }

// validarEdad(18, "chanchito feliz");

// //colocar valores por defecto dentro de los argumentos, los valores por default evitaria que generara problema en definicion de tipado del argumento

// function validarEdad2(edad: number, msg: string = "Chanchito Feliz"): string {
//   if (edad > 17) {
//     return `Puedes pasar ${msg}`;
//   }

//   return "No puedes pasar";
// }

// validarEdad2(18); //no hay problema en no pasar un argumento porque estaria usando uno por defecto

// /**
//  * Never
//  *
//  * somos explicito es establecer que esta funcion solo va despachar un error
//  *
//  * funcion del never
//  */

// function ErrorUsuario(): never {
//   throw new Error("Error de usuario");
// }

// /**
//  * Union type
//  * mas de un solo tipo para referirnos a una variable
//  */

// let puntaje: number | string = 98;

// puntaje = "Hola mundo 2";

// // example

// type Animal = {
//   id: number;
//   estado: string;
// };

// type Usuario = {
//   id: number;
//   name: string;
// };

// let animale: Usuario | Animal = {
//   id: 2,
//   estado: "",
//   name: "",
// };

// // el parametro puede ser de tipo string o de number. se evalua si es de tipo number... pero el return si o si tiene que ser number....

// function sumaDos(n: number | string): number {
//   if (typeof n === "number") {
//     return n + 2;
//   }

//   return parseInt(n) + 2;
// }

// /**
//  * Intersection types
//  * construir dos recursos. el objeto debe tener las propiedades que fueron declaradas de los dos recursos y unirlos
//  */

// // recursos

// type Audit = {
//   created_at: string;
//   modified_at: string;
// };

// type Product = {
//   name: string;
// };

// const product: Audit & Product = {
//   created_at: "",
//   modified_at: "",
//   name: "",
// };

// /**
//  * Literal types
//  * se construye un recurso
//  */

// type Fibo = 0 | 1 | 2 | 3 | 5;

// const nFibo: Fibo = 5;

// /**
//  * Nullable types
//  *
//  */

// // para manejar el caso de null - undefined

// function toNumber(s: string | null | undefined) {
//   if (!s) {
//     return 0;
//   }
//   return parseInt(s);
// }

// const n = toNumber(null);

// /**
//  * Optinal chaining operator
//  *
//  * uso de la "?"
//  * usuario?.create_at
//  * usado tambien en react
//  */

// function getUser(id: number) {
//   if (id < 0) {
//     return null;
//   }

//   return {
//     id: 2,
//     name: "Felipe",
//     create_at: new Date(),
//   };
// }

// const usuario = getUser(2);

// console.log("usuario", usuario?.create_at);

// //esto es igual a:

// if (usuario && usuario?.create_at) {
//   console.log(usuario.create_at);
// }

// // --------

// const arr1 = null;

// arr1?.[0];

// const fn5: any = null;

// fn5?.();

// /**
//  * Nullish coalescing operator
//  * tomar valores por defecto en TS
//  *
//  * --- ?? null o vacio sea un valor importante
//  */

// const difficulty: number | null = 0;

// const user2 = {
//   name: "chanchito feliz",
//   difficulty: difficulty ?? 1,
// };

// console.log(user2);

// /**
//  * Type assertion
//  * para buscar elementos del DOM pero estar seguro que existe y ademas que tipo de valor es
//  *
//  */

// // ---V1

// const input = document.getElementById("username") as HTMLInputElement;

// // ---V2

// const input2 = <HTMLInputElement>document.getElementById("username");

// // input.value

// /**
//  * Type narrowing
//  * varios tipos de datos dentro de una variable
//  * conducirlo por alguno de los cambios establecidos
//  */

// function lala(x: string | number) {
//   if (typeof x === "number") {
//     //
//   }

//   if (typeof x === "string") {
//     //
//   }
// }

// /**
//  * Type Unknown
//  *  reemplazo del tipo any
//  */

// function procesa(algo: unknown) {
//   if (typeof algo === "number") {
//     //
//   }

//   if (typeof algo === "string") {
//     //
//   }
// }

// en vez de any mejor utilizar unknown

/**
 * Clases con typescript
 *
 */

class Personajes {
  profesion?: string;
  private static equipo: number = 1; // inicializar un valor desde la definicion - sin la necesidad de pasarlo por el constructor
  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {}

  subirNivel(): number {
    this.nivel = this.nivel + 1;
    return this.nivel;
  }

  cambiarHp(cantidad: number): number {
    this._hp = this._hp + cantidad;
    // no pasarse del máximo
    return this._hp;
  }

  static agregarPersonaje(): void {
    Personajes.equipo++;
  }

  // nuevas manera de syntax para los get y los set

  get hp(): number {
    return this._hp;
  }

  static getEquipo(): number {
    return Personajes.equipo;
  }

  // ver en la nota de los get y set porque no usar set
}

const personaje = new Personajes(1, "Giovanni", 2, 100);

personaje.subirNivel();

personaje.cambiarHp(-10);

// personaje.hp = 20;

// Personajes.equipo = 1; // no puede pasar porque no deberia modificar el elemento.

const personaje1 = new Personajes(2, "Gustavo", 2, 120);

Personajes.agregarPersonaje();

console.log(personaje);
console.log("integrando equipo", personaje1);

console.log("instancia directamente / equipo:::", Personajes.getEquipo());

console.log("cambios de get:::", personaje.hp);
// console.log("cambios de set:::", personaje.hp);

if (personaje instanceof Personajes) {
  // verifica si existe la instancia de personajes. true / false
}

/**
 * Control de acceso
 * es agregar private a hp y por convención agregar _hp. establece un scope que se puede usar dentro de la clase y el metodo pero no se podrá acceder desde el exterior.
 */

// _________ observar la class y hp

/**
 * Propiedades opcionales y de sólo lectura
 *
 * profesion?: string; para establecer que es una propiedad opcional
 *
 * redonly establecer que dicha propiedad no se puede modificar y solamente es de lectura.
 * example: readonly id: number;
 *
 */

//--------------- observar la class
// - se agrega redonly al id y "?" determinando propiedad que es opcional

/**
 * Parameter properties
 *
 * se modifica y se simplica las declaraciones de las propiedades determinando: las privadas / publicas / publicas y solo de lectura y las opcionales
 *
 * ver class como quedo.
 */

/**
 * Getters y setters
 * 
 * nueva syntax
 *   get hp(): number {
    return this._hp;
  }
  // NO TIENE SENTIDO MUCHO USAR LOS SET. PUEDEN CONFUNDIRSE CON AGREGARLE UN VALOR A UNA PROPIEDAD
  //MEJOR MANEJARLO POR MEDIO DE UN METODO.
  // set hp(cantidad: number) {
  //   //los set no pueden retonar un valor
  //   this._hp = this._hp + cantidad;
  // }
 *
 */

/**
 * Propiedades y metodos estáticos
 * 
 *   private static equipo: number = 1;
 *
 *  static getEquipo(): number {
    return Personajes.equipo;
  }
 *
 */


