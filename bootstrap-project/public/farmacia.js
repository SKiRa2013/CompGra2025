export class Farmacia {
    name;
    nitNumber;
    depto;
    city;
    nombre;
    nit;
    departamento;
    ciudad;
    constructor(name, nitNumber, depto, city) {
        this.name = name;
        this.nitNumber = nitNumber;
        this.depto = depto;
        this.city = city;
        this.nombre = name;
        this.nit = nitNumber;
        this.departamento = depto;
        this.ciudad = city;
    }
    mostrarInfo() {
        return `Farmacia: ${this.nombre}, NIT: ${this.nit}, Departamento: ${this.departamento}, Ciudad: ${this.ciudad}`;
    }
}
//# sourceMappingURL=farmacia.js.map