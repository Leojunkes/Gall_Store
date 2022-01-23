function Teste(request, response) {
  const testeAmigo = 'olá sou Api-teste';

  response.json({
    tes: testeAmigo,
  });
}
export default Teste;
