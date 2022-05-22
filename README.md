# Sistema de consulta e registro de notas fiscais
## Serviço de Banco de dados
```bash
# ---- .env ------- #
USERDB=root

PASSWORD=mestre

DATABASE=api-notas

DATABASE_URL=mysql://${USERDB}:${PASSWORD}@localhost:3306/${DATABASE}
```
## Criação das Tabelas com [Prisma](https://prisma.io) ORM

```code 
npx prisma migrate dev --name init
```
## Inicialização do Servidor
```code
npm start
```
Documentação no formato [Swagger](https://swagger.io) acessar http://localhost:3000/docs