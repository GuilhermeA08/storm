function validarCadastroAnuncio(){
    let nome = document.forms[0].nome.value;
    let preco = document.forms[0].preco.value;
    let categoria = document.forms[0].categoria.value;

    if(!nome){
        alert("Campo do nome do produto não preenchido!");
    }
    else{
        if(!preco){
            alert("Campo do preço não preenchido!");
        }
        else{
            if(!categoria){
                alert("Categoria não definida!");
            }
            else{
                    document.forms[0].submit();
            }
        }
    }
}