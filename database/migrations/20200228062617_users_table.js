exports.up = function(knex) {
    return knex.schema.createTable("users", function(tbl) {
      tbl.increments();
  
      tbl
        .string("name", 255)
        .notNullable()
        .unique()
        .index();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
  };
  