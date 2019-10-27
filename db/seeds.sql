USE burgers_db;

INSERT INTO burgers(burger_name)
    VALUES  ("Original Cheeseburger"),
            ("BBQ Cheeseburger"),
            ("Vegan Portobello Burger"),
            ("Vegetarian Halloumi Burger"),
            ("Chipotle Chicken Burger");
            -- NOTE: devoured column not included in seeds as it defaults to 0 (False) automatically