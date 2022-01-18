const connection = require('./connection');

// criando a chave fullName:
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');
  // filter para casos em que o autor nao possui middleName
  // outra opção seria '.filter(Boolean)', se middle_name for undefined ou string vazia, retorna false
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
}

// alterando padrão de escrita de snake_case para camelCase
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

const getAll = async () => {
  // const result = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  // return result;
  // trazendo apenas o array de interesse por meio da desestruturação do array (pegando apenas o primeiro elemento)

  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',
    [id]
  );

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor ({
    id, 
    firstName,
    middleName,
    lastName
  });
}

module.exports = {
  getAll,
  findById
};