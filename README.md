# CineSamurai
Projeto em grupo do Módulo 5 -> Criação de um website que simula a compra de ingressos de cinema.

**Sobre**: A ferramenta foi desenvolvida utilizando o Node.js, versão 18.17.1, o framework React+Vite, versão 18.2.0 e 4.4.11, respectivamente, e o MongoDB, versão , para construção da api. O objetivo deste projeto é permitir que os usuários possam visualizar e comprar ingressos para os filmes disponíveis no cinema fictício CineSamurai. 

[Documentação-ViteJs](https://vitejs.dev/guide/)
[Documentação-React](https://pt-br.react.dev/learn)
[Documentação-MongoDB](https://www.mongodb.com/docs/)
[Link-API-CineSamurai](https://github.com/samuelkutz/CineSamuraiAPI-v2)

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

#### Parte 1: Inicializando a aplicação back-end - API


* Passo 1: No terminal do seu computador faça o clone do repositório disponível neste [link](https://github.com/samuelkutz/CineSamuraiAPI-v2) utilizando o comando  
```
git clone https://github.com/samuelkutz/CineSamuraiAPI-v2.git
```

* Passo 2: No terminal do Visual Studio Code (ou IDE similar) entre no diretório do projeto 
```
cd CineSamuraiAPI-v2
``` 

* Passo 3: No terminal do Visual Studio Code (ou IDE similar) inicialize o Node.js utilizando o comando a seguir para que a pasta node-modules seja baixada
``` 
npm i 
``` 
-> Documentação: [Node](https://docs.npmjs.com/cli/v9/commands/npm-init)

* Passo 4: Adicione à raiz do projeto um arquivo nomeado como .env e dentro dele adicione o código abaixo
```
PORT="3000"
DATABASE_URI="mongodb+srv://admin:sup9rXRwTPkppoLu@cinesamurai.hsmeuxb.mongodb.net/?retryWrites=true&w=majority"
SECRET_JWT="64cd760a6f1b8327b9f9d8e262dd7a69"
```

* Passo 5: Execute o programa utilizando o comando 
```
npm run dev melior
```

* Exemplo de saída:
```
> cinesamuraiapi-v2@1.0.0 dev
> nodemon ./app.js melior

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node ./app.js melior`
Conectando ao banco de dados...
Servidor rodando em http://localhost/3000
Conectado ao MongoDB!
```

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