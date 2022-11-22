# Sobre o projeto
Criei uma aplicação para treinar o que aprendi até agora no Node.js junto com os conceitos do SOLID!

Essa é uma aplicação de listagem e cadastro de usuários.
Onde que para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser um admin.

# Features
### POST `/users`

A rota recebe `name`, e `email` dentro do corpo da requisição para que seja possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

A rota recebe, nos parâmetros da rota, o `id` de um usuário e transformar esse usuário em admin.

### GET `/users/:user_id`

A rota recebe, nos parâmetros da rota, o `id` de um usuário e devolver as informações do usuário encontrado pelo corpo da resposta.

### GET `/users`

A rota recebe, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os usuários cadastrados. O `id` é usado para validar se o usuário que está solicitando a listagem é um admin. O retorno da lista é feita apenas se o usuário for admin.

# Runner

````
npm run dev

or
yarn dev
```


`
