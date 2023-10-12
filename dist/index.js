"use strict";
let mensaje = "Hola mundo";
mensaje = "chanchito feliz";
mensaje = "Chao Mundo";
console.log(mensaje);
console.log(typeof []);
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-REX";
let extintos = true;
function dinosaurio(config) {
    return config;
}
let animales = ["chanchito", "feliz", "felipe"];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tupla = [1, "chanchito feliz"];
let tupla2 = [1, ["chanchito feliz", "chachito felipe"]];
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Mediana;
console.log(variable1);
const estado = 2;
const objeto = {
    id: 2,
    nombre: "hola mundo",
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: "Siempre viva",
        pais: "Chanchitolandia",
    },
};
const arr = [];
const fn = () => {
    let x = 2;
    if (x > 5) {
        return 7;
    }
    else {
        return 4;
    }
};
const fn1 = () => {
    let x = 2;
    if (x > 5) {
        return 7;
    }
    return 4;
};
const fn2 = () => {
};
const fn3 = (edad) => {
    return edad;
};
const fn4 = (edad) => {
    if (edad > 17) {
        return "puedes ingresar";
    }
    return "no puedes ingresar";
};
function validarEdad(edad, msg) {
    if (edad > 17) {
        return `Puedes ingresar ${msg}`;
    }
    return "No puedes ingresar";
}
validarEdad(18, "chanchito feliz");
function validarEdad2(edad, msg = "Chanchito Feliz") {
    if (edad > 17) {
        return `Puedes pasar ${msg}`;
    }
    return "No puedes pasar";
}
validarEdad2(18);
function ErrorUsuario() {
    throw new Error("Error de usuario");
}
let puntaje = 98;
puntaje = "Hola mundo 2";
let animale = {
    id: 2,
    estado: "",
    name: "",
};
function sumaDos(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    return parseInt(n) + 2;
}
const product = {
    created_at: "",
    modified_at: "",
    name: "",
};
const nFibo = 5;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(null);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 2,
        name: "Felipe",
        create_at: new Date(),
    };
}
const usuario = getUser(2);
console.log("usuario", usuario === null || usuario === void 0 ? void 0 : usuario.create_at);
if (usuario && (usuario === null || usuario === void 0 ? void 0 : usuario.create_at)) {
    console.log(usuario.create_at);
}
const arr1 = null;
arr1 === null || arr1 === void 0 ? void 0 : arr1[0];
const fn5 = null;
fn5 === null || fn5 === void 0 ? void 0 : fn5();
const difficulty = 0;
const user2 = {
    name: "chanchito feliz",
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1,
};
console.log(user2);
//# sourceMappingURL=index.js.map