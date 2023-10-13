"use strict";
class Personajes {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    static agregarPersonaje() {
        Personajes.equipo++;
    }
    get hp() {
        return this._hp;
    }
    static getEquipo() {
        return Personajes.equipo;
    }
}
Personajes.equipo = 1;
const personaje = new Personajes(1, "Giovanni", 2, 100);
personaje.subirNivel();
personaje.cambiarHp(-10);
const personaje1 = new Personajes(2, "Gustavo", 2, 120);
Personajes.agregarPersonaje();
console.log(personaje);
console.log("integrando equipo", personaje1);
console.log("instancia directamente / equipo:::", Personajes.getEquipo());
console.log("cambios de get:::", personaje.hp);
if (personaje instanceof Personajes) {
}
//# sourceMappingURL=index.js.map