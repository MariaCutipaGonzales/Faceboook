var users = [{user:"maria.cg@gmail.com", password: "holaquehace"},
			 {user:"maria.fe@hotmail.com", password: "Facebook"},
			 {user:"dianacutipa.gonzales@gmail.com", password: "diana"},
			 {user:"fernando.acosta@gmail.com", password: "feracosta"}];

function Login() {
	var usu = document.getElementById('user');
	var pwd = document.getElementById('password');

	for (var i = 0; i < users.length; i++) {
		if(users[i].user == usu && users[i].password == pwd){
			alert("Usted Ingreso");
		}else{
			alert("Usuario ó contraseña");
		}
	}

}

function Redirect(){
	window.location.href = "timeline.html";
}