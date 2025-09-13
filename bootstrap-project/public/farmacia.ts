export class Farmacia {
    private nombre: string;
    private nit: string;
    private departamento: string;
    private ciudad: string;
    
    constructor (public name: string, public nitNumber: string, public depto: string, public city: string) {
        this.nombre = name;
        this.nit = nitNumber;
        this.departamento = depto;
        this.ciudad = city;
    }

    mostrarInfo(): string {
        return `Farmacia: ${this.nombre}, NIT: ${this.nit}, Departamento: ${this.departamento}, Ciudad: ${this.ciudad}`; 
    }
}