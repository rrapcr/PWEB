function confirmarSelecao() {
  var selectCurso = document.getElementById("cursos");
  var cursoEscolhido = selectCurso.options[selectCurso.selectedIndex].text;

  var confirmacao = confirm("Deseja visualizar mais informações sobre " + cursoEscolhido + "?");

  if (confirmacao) {
    abrirPaginaCurso(cursoEscolhido);
  }
}

function abrirPaginaCurso(curso) {
  var largura = 600;
  var altura = 300;
  var left = (screen.width - largura) / 2;
  var top = (screen.height - altura) / 2;

  var novaJanela = window.open('', curso, 'width=' + largura + ',height=' + altura + ',left=' + left + ',top=' + top);

  // Conteúdo da nova janela
  novaJanela.document.write('<html><head><title>' + curso + '</title></head><body>');
  novaJanela.document.write('<h1>' + curso + '</h1>');
  novaJanela.document.write('<p>Descubra mais sobre o curso de ' + curso + '.</p>');
  novaJanela.document.write('</body></html>');

  novaJanela.focus();
}
