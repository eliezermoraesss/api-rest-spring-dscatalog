# 👨🏼‍💻 Backend Dashboard Catálogo de Produtos
## 📚 Bootcamp Desenvolvedor Fullstack Spring React DevSuperior 3.0

## 🔷 Technologies<br>
1. Spring Boot<br>
2. Spring Data JPA<br>
3. ORM<br>
4. Spring Security
5. OAuth2
6. JWT
7. Spring Cloud
8. H2 Database <br>
9. PostgreSQL
10. Containerization
11. Docker
12. Docker Compose
13. AWS Deploy

## 🔷 Features
1. DTO (Data Transfer Object) principles<br>
2. Automaticaly converter DTO to Entity<br>
3. Custom Exception Handler messages<br>
4. Resources (REST Controller)<br>
5. DTO<br>
6. Services<br>
7. Entities<br>
8. Respositories<br>
9. Exceptions<br>
10. Validation and Authorization
11. JUnit tests
12. TDD



## 🔷 Built With<br>
Spring Initializr<br>
Maven<br>

How can I test my endpoints?<br>

For tests cases, you can check the API endpoints with Postman.<br>

[Postman Collection](https://www.postman.com/)<br>

## 🔷 Backend: 
1. Busca paginada de recursos<br>
2. Busca de recurso por id<br>
3. Inserir novo recurso<br>
4. Atualizar recurso<br>
5. Deletar recurso<br>
<br>
O projeto deverá estar com um ambiente de testes configurado acessando o banco de dados H2, deverá usar Maven como gerenciador de dependência, e Java 11 como linguagem.
<br>
Um cliente possui nome, CPF, renda, data de nascimento, e quantidade de filhos. A especificação da entidade Client é mostrada a seguir (você deve seguir à risca os nomes de classe e atributos mostrados no diagrama):<br>

Seu projeto deverá fazer um seed de pelo menos 10 clientes com dados SIGNIFICATIVOS (não é para usar dados sem significado como “Nome 1”, “Nome 2”, etc.).<br>

Atenção: lembre-se de que por padrão a JPA transforma nomes de atributos em camelCase para snake_case, como foi o caso do campo imgUrl do DSCatalog, que no banco de dados tinha o nome img_Url. Assim, o campo birthDate acima será criado no banco de dados como birth_Date, então seu script SQL deverá seguir este padrão.<br>

## 🔷 Testes manuais no Postman<br>
<b>GET /clients?page=0&linesPerPage=6&direction=ASC&orderBy=name<br> </b>

### 🔷 Busca de cliente por id<br>
<b>GET /clients/1<br></b>

### 🔷 Inserção de novo cliente<br>
<b>POST /clients<br></b>
{<br>
  "name": "Maria Silva",<br>
  "cpf": "12345678901",<br>
  "income": 6500.0,<br>
  "birthDate": "1994-07-20T10:30:00Z",<br>
  "children": 2<br>
}<br>

### 🔷 Atualização de cliente<br>
<b>PUT /clients/1<br></b>
{<br>
  "name": "Maria Silvaaa",<br>
  "cpf": "12345678901",<br>
  "income": 6500.0,<br>
  "birthDate": "1994-07-20T10:30:00Z",<br>
  "children": 2<br>
}<br>

### 🔷 Deleção de cliente
<b>DELETE /clients/1</b>
