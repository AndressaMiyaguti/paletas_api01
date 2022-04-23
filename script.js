const baseUrl = 'http://localhost:3001';

const findPaletas = async () => { /* Função que faz a solicitação ao banco de dados o ASYNC permite que a aplicação continue rodando enquanto fazemos a requisição ao banco de dados */
  const response = await fetch(`${baseUrl}/paletas`);
  const paletas = await response.json();/* solicitação que a informção venha em formato json */
  paletas.forEach((paleta) => {
    document.getElementById('paletaList').insertAdjacentHTML( /* insertAdjacentHTML, insere um o elemento nela contida em paletaList,  */
      'beforeend', /* Indicamos a posição e em seguida o conteudo(text) dentro de template */
      `<div class="PaletaListaItem">
          <div>
              <div class="PaletaListaItem__sabor">${paleta.sabor}</div>
              <div class="PaletaListaItem__preco">R$ ${paleta.preco.toFixed( /* Indicamos o número de casas decimais depois da vírgula que o preço irá apresentar em tela */
                2,
              )}</div>
              <div class="PaletaListaItem__descricao">${paleta.descricao}</div>
            </div>
              <img class="PaletaListaItem__foto" src=${
                paleta.foto
              } alt=${`Paleta de ${paleta.sabor}`} />
          </div>`,
    );
  });
};

findPaletas();
