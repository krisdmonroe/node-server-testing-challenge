const db = require("../database/connection.js");

module.exports = {
    add,
    all,
    remove,
};

function all() {
  return db("users");
}

async function add(user) {
    const [id] = await db('users').insert(user);
  
    return findById(id);
  }

   
  function remove(id) {
    return db("users")
        .where({ id })
        .del();
  }
  