# Bexs Perguntas e Respostas - Frontend

> Sistema de perguntas e respostas

## Instalação

Você deverá ter em sua máquina os seguinte itens:

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) 10.0.0 (ou superior)

1. Faça um Fork ou clone este repositório.

2. Instale as dependências do projeto:

   ```sh
   npm install
   ```

   ou se você usa yarn:

   ```sh
   yarn
   ```

3) Tenha o [Bexs-Backend](https://github.com/JessileyOliveira/Bexs-backend) rodando em sua máquina no endereço `localhost:3333` (caso queira outro endereço altere o arquivo `./src/services/axios.js` para o endereço desejado).

## Execução

Para início da aplicação, execute:

#### `Desenvolvimento:`

```sh
npm start
```

ou se você usa yarn:

```sh
yarn start
```

#### `Produção:`

```sh
npm run build
```

ou se você usa yarn:

```sh
yarn build
```

_Isso ira criar a pasta `build` com os arquivos para produção._

## Testes:

_Os testes estão localizados na pasta `__tests__`._

Use o comando abaixo para executar os testes:

```sh
npm test
```

ou se você usa yarn:

```sh
yarn test
```

## Páginas

### `Perguntas:`

> Página responsável pela listagem e cadastro das perguntas, também é possível ver o autor, data e quantidade de respostas de cada pergunta.

#

### `Respostas:`

> Página responsável pela listagem e cadastro das respostas de uma pergunta, também é possível ver o autor e data das respostas.
