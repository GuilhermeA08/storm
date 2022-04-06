function validarLogin(){
    let email = document.forms[0].floatingEmail.value;
    let senha = document.forms[0].floatingPassword.value;

    if(!email){
        alert("Campo de email não preenchido!");
    }
    else{
        if(!senha){
            alert("Campo de senha não preenchido!");
        }
        else{
            document.forms[0].submit();
        }
    }
}