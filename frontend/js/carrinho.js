function validarCarrinho() {
  let endereco = [document.getElementById("endereco1")];
  endereco.push(document.getElementById("endereco2"));
  let pagamento = [document.getElementById("pagamento1")];
  pagamento.push(document.getElementById("pagamento2"));

  if (!endereco[0].checked && !endereco[1].checked) {
    alert("Preencha o endereço");
  } else if (!pagamento[0].checked && !pagamento[1].checked) {
    alert("Preencha a forma de pagamento");
  } else {
    alert("Pedido enviado!");
  }
  {
  }
}
