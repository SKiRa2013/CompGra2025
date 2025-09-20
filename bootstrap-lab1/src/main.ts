import { Representante } from "./representante.js";

function validarPassword(password: HTMLInputElement, confirm: HTMLInputElement) {
    if (confirm.value === "" || password.value === "") {
      confirm.setCustomValidity("Este campo es obligatorio");
    } else if (confirm.value !== password.value) {
      confirm.setCustomValidity("Las contraseñas no coinciden");
    } else {
      confirm.setCustomValidity("");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formRepresentante") as HTMLFormElement;
    const resultado = document.getElementById("resultado") as HTMLDivElement;
	const setPass = document.getElementById("setPassword") as HTMLInputElement;
	const confPass = document.getElementById("repPassword") as HTMLInputElement;

	setPass.addEventListener("input", () => validarPassword(setPass, confPass));
	confPass.addEventListener("input", () => validarPassword(setPass, confPass));

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita recargar la página

        // Si el formulario no es válido, mostramos la validación de Bootstrap
        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          return;
        }

        // Capturamos los valores
        const nombre = (document.getElementById("nombre") as HTMLInputElement)
          .value;
        const dni = (document.getElementById("dni") as HTMLInputElement).value;
        const mail = (
          document.getElementById("mail") as HTMLInputElement
        ).value;
        
        // Creamos la instancia de la clase
        const repre = new Representante(nombre, dni, mail, setPass.value);

        // Mostramos el resultado en pantalla
        resultado.innerHTML = `
            <div class="alert alert-success mt-3">
              ${repre.mostrarInfo()}
            </div>
        `;

        // Opcional: limpiar el formulario después de mostrar el resultado
        form.reset();
        form.classList.remove("was-validated");
    });
});
