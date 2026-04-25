# App 

GymPass style app.


##  RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizado pelo usuário logado;
- [x] Deve se possível o usuário obter o histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas;
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;



## RNs (Regras de negocio)

- [x] O usuário não deve poder se cadastrar com um email duplicado;
- [x] O usuário não pode fazer 2 check-in no mesmo dia;
- [x] O usuário não pode fazer check-in se nao estiver perto (100m) da academia;
- [] O check-in so pode ser validado até 20 minutos após criado;
- [] O check-in so pode ser validado por administradores; 
- [] A academia so pode ser cadastradas por administradores;

## RNs (Requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisa estar persistido em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [] O usuário deve ser identificado por um JWT(Json Web Token)
