const orm = require("../config/orm.js");


orm.selectAll("burgers");
orm.insertOne("burgers","burger_name",/*"newBurgerName_here"*/);
orm.updateOne("burgers",/*"updateColumn"*/,/*"newValue"*/,/*"targetColumn"*/,/*targetValue*/);

modules.export = orm.updateOne;
modules.export = orm.insertOne;
modules.export = updateOne;