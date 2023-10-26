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

#### Parte 1: API

* A aplicação Back-end está hospedada no link abaixo: (*Disponível em breve*)
[Link-render]()

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