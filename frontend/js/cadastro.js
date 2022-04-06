function cadastrar(){
    let nome = document.forms[0].floatingNome.value;
    let sobrenome = document.forms[0].floatingSobrenome.value;
    let dataNascimento = document.forms[0].floatingData.value;
    let cpf = document.forms[0].floatingCPF.value;
    let email = document.forms[0].floatingEmail.value;
    let senha = document.forms[0].floatingPassword.value;

    if(!nome){
        alert("Preencha campo nome!");
    }
    else{
        if(!sobrenome){
            alert("Preencha o campo sobrenome");
        }
        else{
            if(!dataNascimento){
                alert("Preencha a sua data de nascimento");
            }
            else{
                if(!cpf){
                    alert("Preencha o campo de CPF");
                }
                else{
                    if(!email){
                        alert("Preencha seu email");
                    }
                    else{
                        if(!senha){
                            alert("Crie uma senha");
                        }
                        else{
                            document.forms[0].submit();
                        }
                    }
                }
            }
        }
    }
}