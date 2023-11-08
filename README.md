# CineSamurai
Projeto em grupo do Módulo 5 -> Criação de um website que simula a compra de ingressos de cinema.

**Sobre**: A ferramenta foi desenvolvida utilizando o Node.js, versão 18.17.1, o framework React+Vite, versão 18.2.0 e 4.4.11, respectivamente, e o MongoDB, versão , para construção da api. O objetivo deste projeto é permitir que os usuários possam visualizar e comprar ingressos para os filmes disponíveis no cinema fictício CineSamurai. 

**Descrição do projeto**: A plataforma criada é dividida em três áreas. A primeira área pode ser acessada por qualquer usuário, mesmo que este não esteja logado, sendo possível visualizar os filmes que estarão em cartaz em breve e os que estão atualmente, bem como a sinopse e classificação indicativa desses, os valores do ingresso conforme os dias da semana, informações sobre o CineSamurai na página 'Quem Somos' e as páginas de Login e Cadastro.

As segunda e terceira áreas somente podem ser acessadas pelo usuário logado. Assim, a segunda área trata-se da compra de ingressos a partir do filme escolhido (o fluxo de compra está descrito abaixo no título 'Funcionalidades: Compra de Ingressos'). Já a terceira refere-se a área Minha Conta, no qual o usuário pode alterar suas informações, excluir e sair da sua conta.

[Documentação-ViteJs](https://vitejs.dev/guide/)
[Documentação-React](https://pt-br.react.dev/learn)
[Documentação-MongoDB](https://www.mongodb.com/docs/)
[Link-API-CineSamurai](https://github.com/samuelkutz/CineSamuraiAPI-v2)

### Contexto:

Este projeto foi desenvolvido com o intuito de resolver um problema fictício, definido como: Um empreendedor decidiu investir na construção de um cinema, chamado CineSamurai, em uma cidade do interior, em poucos meses seu empreendimento começou a crescer e o empreendedor percebeu que era necessário investir em facilidades para seus clientes. O site antigo do CineSamurai somente permitia visualizar os filmes em cartaz, então nossa equipe foi contratada para reestruturar o site, permitindo ao usuário novas funcionalidades como a compra de ingressos online. Tais funcionalidades estão descritas abaixo.




#### Funcionalidade: Compra de ingressos

As etapas abaixo tratam-se do fluxo de compra de ingressos. 

* Etapa 1: Escolha do filme
<img src="/src/assets/comprarIngresso.png"> 
* A página Filmes permite que o usuário selecione o filme desejado a partir dos botões 'Comprar Ingresso' dispostos em cada um dos filmes em cartaz.

* Etapa 2: Login
<img src= "/src/assets/login.png">
<img src= "/src/assets/cadastrar.png">
* A página de Login permite que o usuário entre com seu e-mail e senha. Já a página Cadastro, é destinada para novos usuários que desejam se cadastrar.
* A partir da etapa 1, o usuário é direcionado para a área de Login e somente conseguirá realizar a compra do ingresso caso possua uma conta.

* Etapa 3: Escolha de data, hora, quantidade de ingresso e preço.
<img src= "/src/assets/comprarIngresso.png">
* A página VendasOnline possibilita a escolha do dia, horário e quantidade de ingressos a serem comprados.
* Após o Login, o usuário é direcionado para esta página.

* Etapa 4: Poltronas
<img src= "/src/assets/poltrona.png">
* A página Poltronas permite a escolha das poltronas conforme a quantidade de ingressos selecionados na etapa 3.
* O usuário é direcionado para esta página após clicar no botão 'Continuar da etapa 3.

* Etapa 5: Bilhete
<img src= "/src/assets/bilhete.png">
* A página Ingresso, de caráter informativo, mostra ao usuário as poltronas escolhidas por ele e onde encontrar os   bilhetes comprados.

#### Funcionalidade: Ações do usuário 
A página MinhaConta permite que o usuário faça as seguintes ações a partir dos botões: 
* 'Editar informações': altere suas informações de cadastro.
* 'Excluir conta': Exclua suas informações do banco de dados.
* 'Sair': Deslogue seu usuário.
<img src= "/src/assets/minhaConta.png">
<img src= "/src/assets/editar.png">
<img src= "/src/assets/excluir.png"

### Bibliotecas Instaladas

* react-router-dom@6 -> Usada para gerenciar a navegação e as rotas em aplicativos da web React. Oferece roteamento declarativo, gestão de histórico e passagem de parâmetros pela URL.
 -> Documentação: [react-router-dom@6](https://reactrouter.com/en/main)
 -> Versão: 6.17.0

* styled-components ->  É uma biblioteca para estilização de componentes em aplicações React. Ela permite escrever estilos em CSS diretamente nos arquivos JavaScript.
-> Documentação: [styled-components](https://styled-components.com/docs)
-> Versão: 6.1.0

* @phosphor-icons -> Fornece um conjunto de ícones personalizáveis e prontos para uso, frequentemente usados em interfaces de usuário para aplicativos da web.
-> Documentação: [@phosphor-icons](https://phosphoricons.com)
-> Versão: 2.0.13

* Axios ->  Utilizada para fazer requisições HTTP a servidores, permitindo a comunicação entre um aplicativo web e um servidor, frequentemente usado para acessar APIs e recuperar ou enviar dados.
-> Documentação [Axios](https://axios-http.com/docs/intro)
-> Versão: 1.5.1

* cpf-cnpj-validator -> Utilizada para validar e formatar números de CPF e CNPJ no Brasil.
-> Documentação [cpf-cnpj-validator](https://www.npmjs.com/package/cpf-cnpj-validator)
-> Versão: 1.0.3

### O que é necessário para executar o projeto:

Para executar o projeto você precisa ter o Node.JS instalado, caso não tenha acesse o [link](https://nodejs.org/en/download) e faça o download do Node de acordo com seu sistema operacional.

Caso você já possua o Node instalado, faça a atualização dele utilizando o comando
```
npm install -g npm
```

### Como executar o projeto:

#### Parte 1: API

* A aplicação Back-end está disponível pelo link: (CineSamuraiAPI-v2)
[https://github.com/samuelkutz/CineSamuraiAPI-v2]

* Para executar o servidor, basta seguir as instruções no link acima.

#### Parte 2: Inicializando a aplicação front-ent

Obs.: Utilize outra janela do  Visual Studio Code (ou IDE similar) para realizar os seguintes passos

* Passo 1: No terminal do seu computador faça o clone deste repositório utilizando o comando  
```
git clone https://github.com/ericafernandaj/CineSamurai.git
```

* Passo 2: No terminal do Visual Studio Code (ou IDE similar) entre no diretório do projeto 
```
cd CineSamurai
``` 

* Passo 3: No terminal do Visual Studio Code (ou IDE similar) inicialize o Node.js utilizando o comando a seguir para que a pasta node-modules seja baixada
``` 
npm i 
``` 

* Passo 4: Execute o programa utilizando o comando 
```
npm run dev
```

* Passo 5: Acesse o link disponibilizado no terminal.
Exemplo de saída:
```
  VITE v4.5.0  ready in 393 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Para navegar no Site ultizando vercel
(https://cine-samurai.vercel.app/)
