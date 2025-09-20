export class Representante {
    private name: string;
    private id: string;
    private mail: string;
    private password: string;
    
    constructor (public nombre: string, public dni: string, public correo: string, public contra: string) {
        this.name = nombre;
        this.id = dni;
        this.mail = correo;
        this.password = contra;
    }

    mostrarInfo(): string {
        return `Representante: ${this.name}, ID: ${this.id}, Correo: ${this.mail}, Contraseña: ${this.password}`; 
    }
}