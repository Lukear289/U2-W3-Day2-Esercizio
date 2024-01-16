const nome = document.getElementById('nome');

const saveButton = document.getElementsByClassName('btn-success')[0];
const resetButton = document.getElementsByClassName('btn-warning')[0];
const paragrafo = document.getElementById('inputfield');

saveButton.addEventListener('click', function () {
  console.log('cliccato salva!');
  const content = nome.value;
  console.log('content', content);
  localStorage.setItem('nomesalvato', content);
  alert('contenuto salvato!');
});
resetButton.addEventListener('click', function () {
  console.log('cliccato reset!');
  textarea.value = '';
  localStorage.removeItem('nomesalvato');
  alert('memoria eliminata!');
});
const savedContent = localStorage.getItem('nomesalvato');
const titolo = function () {
  const savedContent = localStorage.getItem('nomesalvato');

  paragrafo.value = savedContent;
};
titolo();
