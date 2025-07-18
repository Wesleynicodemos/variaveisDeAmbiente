### O que são variaveis de ambiente?
São valores externos ao nosso codigo usados para configurar a aplicação.
Elas geralmente guardam:
 - Chaves de API;
 - Senhas;
 - Portas;
 - URLs de banco de dados;

### Por que usamos?
 - segurança: Não precisa deixar senhas expostas no código.
 - flexibilidade: Pode mudar os valores sem alterar o código.
 - facilidade em ambientes diferentes, podendo ter valores para desenvolvimento e valores para produção.


### Como usar?
 Criamos um arquivo chamado ".env" nele vão as variaveis de ambiente. Ele não tem uma sintaxe própia, é usado apenas a chave e o valor, ex: " DATABASE_USER = 'Wesley' ". 
 Para acessar as variaveis de ambiente no cogigo usamos "process.env.nomeDaVariavel". Em versões antigas do node era necessario intalar o pacote "dotenv", mas nas versões mais recentes do Node.Js apenas criamos um script no package.json com o segunnte comando "node --env-file=.env arquivo.js".
