# 🐾 Abrigo de Animais

Este projeto simula a lógica de um **abrigo de animais**, onde pessoas podem adotar bichinhos de acordo com os brinquedos que possuem e as preferências dos animais.  
O sistema valida se a adoção é possível e retorna uma lista indicando se o animal foi adotado por uma pessoa ou permaneceu no abrigo.  

---

## 📌 Funcionalidades
- Cadastro de animais com **nome, espécie e brinquedos favoritos**.
- Validação de:
  - Animais informados na ordem de adoção.
  - Brinquedos escolhidos pelas pessoas.
- Regra de adoção:
  - Cada pessoa pode adotar até **3 animais**.
  - Se os dois puderem adotar o mesmo animal → ele fica no abrigo.
  - O animal especial **"Loco" (jabuti)** só pode ser adotado se já houver pelo menos uma adoção.
- Retorno de uma lista final organizada, mostrando:
  - `Animal - pessoa 1`
  - `Animal - pessoa 2`
  - `Animal - abrigo`

---

## 🗂 Estrutura do Projeto
- **`animal.js`** → Classe `Animal` e funções para cadastrar/listar animais.  
- **`abrigo-animais.js`** → Classe `AbrigoAnimais` com a lógica de validação e adoção.  
- **`abrigo-animais.test.js`** → Testes automatizados usando **Jest**.  

--
