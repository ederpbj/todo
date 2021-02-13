# todo
Projeto Todo web e mobile

### Links

[Insomnia](https://insomnia.rest/download/)

[Git do projeto](https://github.com/ederpbj/todo)

[Mongodb Center](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

[FiraCode](https://github.com/tonsky/FiraCode)

## COMANDOS CMD

#### Comando iniciais

`git clone https://github.com/ederpbj/ideia-unica.git` clonar repositório

`npm init -y` inicia projeto node confirmando tudo

`npm i next react react-dom` instalações iniciais

#### Github

`git checkout -b teste` Criar nova branch no git

`git add -A` adicionar alterações no git

`git commit -m 'nova chamada de home'` comitar alterações no git

`git checkout -b main` Retornar a branch main

`git merge teste` unir alterações da branch teste com a main

#### Integrando com Reactstrapp

`npm install --save reactstrap` react strap

`npm install --save bootstrap`

`npm i --save @zeit/next/css` //não realizado, fazer junto com arquivo next.config.js

#### Demais comandos

`npm i express` pacote express para servidor

`node src/index.js` rodar API

`npm i -g nodemon` nodemon para reiniciar server automático

`npm i nodemon -D` nodemon vai ser uma dependência de desenvolvimento

`nodemon src/index.js` rodar API com nodemon

`npm i mongoose` mongodb

## OUTRAS ALTERAÇÕES

* Adicionar linha no script do package

"scripts": {
    "dev": "next", //dev
    "build": "next build", //construção
    "start": "next start" //produção
  },

  "scripts": {
    "dev": "nodemon src/index.js",

  