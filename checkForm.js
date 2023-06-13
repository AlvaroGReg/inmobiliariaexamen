/**
 * The function checks if certain input values are valid.
 * @returns a boolean value that indicates whether all the input values passed certain validation
 * checks.
 */
function checkValues() {

	let domicilio = document.getElementById('domicilio').value.trim()
	let poblacion = document.getElementById('poblacion').value.trim()
	let provincia = document.getElementById('provincia').value.trim()
	let dni = document.getElementById('dni').value.trim()
	console.log("dni ", dni)

	return (
		validarNombreApellidos() &&
		checkDNI(dni) &&
		checkAddress(domicilio) &&
		checkAddress(poblacion) &&
		checkAddress(provincia)
	)
}
//NOMBRE
function validarNombreApellidos() {
	var nombreApellidos = document.getElementById("nombre").value.trim()
  
	// Comprobar longitud máxima
	if (nombreApellidos.length > 75) {
	  alert("El nombre y apellidos deben tener un máximo de 75 caracteres.")
	  return false
	}
  
	// Comprobar caracteres permitidos (letras, guiones y tildes)
	var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\- ]+$/
	if (!regex.test(nombreApellidos)) {
	  alert("El formato del nombre y apellidos es incorrecto. Solo se permiten letras, guiones y tildes.")
	  return false;
	}
  
	return true;
}

//DNI
function checkDNI(dni) {

	const dniRegex = /^([0-9]{8})([A-Za-z])$/
	const validLetters = "TRWAGMYFPDXBNJZSQVHLCKE"

	const match = dni.match(dniRegex)

	if (!match) {
		alert(
			"El formato del DNI es inválido. Debe contener 8 dígitos seguidos de una letra."
		)
		return false
	}

	const [dniNumber, dniLetter] = match

	const calculatedLetter = validLetters.charAt(dniNumber % 23)

	if (calculatedLetter !== dniLetter.toUpperCase()) {
		alert("La letra del DNI es incorrecta.")
		return false
	}

	return true
}

//DIREC
function checkAddress(inputValue) {
	var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\- ]+$/;
	return regex.test(inputValue);
}