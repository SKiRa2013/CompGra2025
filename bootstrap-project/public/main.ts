import { Farmacia } from "./farmacia.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formFarmacia") as HTMLFormElement;
  const resultado = document.getElementById("resultado") as HTMLDivElement;

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
    const nit = (document.getElementById("nit") as HTMLInputElement).value;
    const departamento = (
      document.getElementById("departamento") as HTMLInputElement
    ).value;
    const ciudad = (document.getElementById("ciudad") as HTMLInputElement)
      .value;

    // Creamos la instancia de la clase
    const farmacia = new Farmacia(nombre, nit, departamento, ciudad);

    // Mostramos el resultado en pantalla
    resultado.innerHTML = `
      <div class="alert alert-success mt-3">
        ${farmacia.mostrarInfo()}
      </div>
    `;

    // Opcional: limpiar el formulario después de mostrar el resultado
    form.reset();
    form.classList.remove("was-validated");
  });
});
