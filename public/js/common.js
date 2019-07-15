/**
 * Escuchamos el elemento del selector del lenguage y así no utilizamos onchange el cual no podemos con volt
 */
var selectlanguage = document.getElementById("select-language");
selectlanguage.addEventListener("change", changeLanguage);
function changeLanguage() {
    var language = selectlanguage.options[selectlanguage.selectedIndex].value;
    window.location.href = "/" + language;
}

/**
 * Evento login ajax
 */
document.getElementById('login-ajax').onclick=function(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errores = erroresLogin(email, password);
    $('#notification-ajax-login').empty();
    $('#notification-ajax-login').hide();
    if (errores.length == 0) {
        /*var xhr = new XMLHttpRequest();
        var ajax_url = "/usuarios/login";
        // Definimos los parámetros que vamos a enviar
        var params = "parametro=valor&otro_parametro=otro_valor";

        // Creamos un nuevo objeto encargado de la comunicación
        var ajax_request = new XMLHttpRequest();

        // Definimos como queremos realizar la comunicación
        ajax_request.open( "POST", ajax_url, true );
        // Ponemos las cabeceras de la solicitud como si fuera un formulario, necesario si se utiliza POST
        ajax_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //Enviamos la solicitud junto con los parámetros
        ajax_request.send( params );*/
    } else {
        $('#notification-ajax-login').show();
        $('#notification-ajax-login').html(errores);
    }
}

function erroresLogin(email, password) {
    var errores = [];
    if (email.length == 0) {
        errores.push('Tienes que introducir un email.</br>');
    } else {
        if (!validarEmail(email)) errores.push('Introduce un email correcto.</br>');
    }
    if (password.length == 0) errores.push('Tienes que introducir una contraseña.</br>');
    return errores;
}

function validarEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}