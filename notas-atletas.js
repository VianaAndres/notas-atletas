let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

let nomesDosAtletas = 0
let notasAtribuidas = 0

for (let i = 0; i < atletas.length; i++){ //O código que vai aqui será executauma vez para cada item da matriz

  nomesDosAtletas = atletas.map(function(nomes){
      return nomes.nome
  })
  notasAtribuidas = atletas.map(function(notas){
      let total = notas.notas
      total.sort(function(a, b) { 
          return a - b;
      });
      return total // ordenar as matrizes menor para maior nota
  })

}
for (let i = 0; i < atletas.length; i++){ 

  switch(i){
      case i:
          console.log(`Atleta: ${nomesDosAtletas[i]}`) // nome dos atletas
          console.log(`Notas Obtidas: ${notasAtribuidas[i]}`) // apresenta notas ordenadas
          let notasAtleta = notasAtribuidas[i].slice(1, notasAtribuidas[i].length-1) // retira o primeiro e o último valor das notas
          let soma = notasAtleta.reduce(function(total,atual){
              return (total + atual)
          })
          let media = soma/notasAtleta.length
          console.log(`Média Válida: ${media}`) // apresenta a media desconsiderando a maior e a menor nota
          console.log() // incluir espaço entre as linhas
      }
}
