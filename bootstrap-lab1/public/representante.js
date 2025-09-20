export class Representante {
    nombre;
    dni;
    correo;
    contra;
    name;
    id;
    mail;
    password;
    constructor(nombre, dni, correo, contra) {
        this.nombre = nombre;
        this.dni = dni;
        this.correo = correo;
        this.contra = contra;
        this.name = nombre;
        this.id = dni;
        this.mail = correo;
        this.password = contra;
    }
    mostrarInfo() {
        return `Representante: ${this.name}, ID: ${this.id}, Correo: ${this.mail}, Contraseña: ${this.password}`;
    }
}
//# sourceMappingURL=representante.js.map