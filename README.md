# Projeto de Otimização de Rotas

Este projeto fornece um sistema para determinar a melhor rota de entrega usando Node.js e Express. Ele inclui uma API para gerenciar pedidos e rotas, além de funcionalidades para calcular e encontrar a melhor rota com base na distância total.

## Estrutura do Projeto

- **/src**: Contém o código-fonte principal.
  - `index.js`: Arquivo principal do servidor Express.
  - `functions.js`: Contém as funções `verificarMelhorRota` e `calcularDistancia`.

- **/tests**: Contém os testes para funções e rotas.
  - `functions.test.js`: Testes para as funções `verificarMelhorRota` e `calcularDistancia`.
  - `routes.test.js`: Testes para as rotas do Express.

- **package.json**: Gerenciador de pacotes e scripts.
- **README.md**: Documentação do projeto.
- **.gitignore**: Arquivos e pastas a serem ignorados pelo Git.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

1. **Clone o repositório:**
   
   ```bash
   git clone https://github.com/Lyeverson/Prova-GQS-II.git
   cd Prova_GQS-II


2. **Instale as dependências:**
 
   ```bash
   npm install

3. **Inicie o servidor:**

   ```bash
   npm start

4. **Execute os testes:**

   ```bash
   npm test
