console.log('JS OK')

/* 
1. Recupero l'elemento dal DOM
2. Chiedi all'utente il nome
3. Chiedi il suo Cognome
4. Chiedi il colore preferito
5. Salviamo i dati nelle rispettive variabili
6. Sommiamo Nome cognome e colore preferito
7. Aggiugniamo 21
8. Inseriamo il risultato nell'elemento del DOM
*/

const passw= document.getElementById('OutputPass');
console.log(passw);

const num='21';

const nome=prompt('Qual è il tuo nome?', 'Claudio');
console.log(nome);

const cognome=prompt('Qual è il tuo cognome?', 'Huhulia');
console.log(cognome);

const colore=prompt('Qual è il tuo colore preferito?', 'Verde');
console.log(colore);

const pass= nome + cognome + colore + num;
console.log(pass);

passw.innerText=pass;
