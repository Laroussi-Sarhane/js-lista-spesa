
const listaSpesa = ['verdura', 'carne', 'pasta', 'pane', 'carciofi'];

const stampaLista = document.getElementById('lista_spesa');

let i = 0;

while(!(i == listaSpesa.length )){

  stampaLista.innerHTML += '<li>' + listaSpesa[i] + '</li>';
  console.log(listaSpesa);
  i++;
}