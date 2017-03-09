var users = [{user:"maria.cg@gmail.com", password: "holaquehace"},
{user:"maria.fe@hotmail.com", password: "Facebook"},
{user:"dianacutipa.gonzales@gmail.com", password: "diana"},
{user:"fernando.acosta@gmail.com", password: "feracosta"}];

var usu = document.getElementById('user').value;
var pwd = document.getElementById('password').value;

function Login() {
	validateInput();

	for (var i = 0; i < users.length; i++) {
		if(users[i].user == usu && users[i].password == pwd){
			alert("Usted Ingreso");
		}else{
			alert("Usuario ó contraseña");
		}
	}

}

/*function Redirect(){
	window.location.href = "timeline.html";
}*/

function validateInput(){
	var requiredCorreo=document.getElementById('requiredCorreo').value;
	var requiredPassword=document.getElementById('requiredPassword').value;

	if (usu.length == 0) {
		requiredCorreo.innerHTML = "El campo de usuario no puede estar en blanco";
	}
	if (pwd.length == 0) {
		requiredPassword.innerHTML = "El campo de usuario no puede estar en blanco";
	}
}