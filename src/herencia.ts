/**
 * Herencia
 *
 */

/**
 * class Producto
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 *
 *
 *
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

abstract class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date,
    protected created_by: number
  ) {}

  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDesc() {
    return this.name + " - " + this.desc;
  }

  abstract getGuardar(): void;
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  override get fullDesc() {
    return "Producto: " + super.fullDesc;
  }

  getGuardar() {
    console.log("Guardando Producto");
  }
}

class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  override get fullDesc() {
    return "Categoria:" + super.fullDesc;
  }

  getGuardar() {
    console.log("Guardando Categoria");
  }
}

let producto1 = new Producto(
  1,
  2,
  "iphone",
  "es un smarthphone",
  new Date(),
  2
);

console.log(producto1);

let categoria = new Categoria("Celulares", "", new Date(), 1);

categoria.agregarProducto(producto1);

console.log(categoria);
console.log(producto1.fullDesc);
console.log(categoria.fullDesc);

/**
 * Method override
 *
 */

/**
 * Propiedades protegidas o protected
 * protegidas pero pueden usarse desde la clase y dentro de las clases que herenda. pero no desde fuera de las clases.
 */

/**
 * Clases y métodos abstractos
 *
 * se desarrolla para no ser utilizada. como por ejemplo la class padre
 *
 * y ademas, haciendo abstract un metodo conlleva a todas las clases internas deben aplicarlo. de esa manera conlleva a que dicho metodo sea aplicado en cada una de las clases.
 *
 */

/**
 * Interface
 *
 */
