const entree1 = {
    starter: "Bacon Cheese Fries",
    main: "Beef Burger and Colesaw",
    dessert: "Deep Fried Rice Ice-Cream"
};

const entree2 = {
    starter: "Smoked Salmon On Rye",
    main: "Vegetarian Couscous Rolls",
    dessert: "Fruit Plate"
};

const entree3 = {
    starter: "Chips and Hummus",
    main: "Grilled Chicken in Hot Sauce",
    dessert: "Chocolate Ganache Cake"
};

const entree4 = {
    starter: "Tear-and-Share Pesto Bread with Melted Brie",
    main: "Brandied Ham",
    dessert: "Glazed Chocolate Layer Cake"
};

const entree5 = {
    starter: "Crayfish rolls",
    main: "Bay-Leaf-Crusted Pork Roast",
    dessert: "Sticky Toffee Pudding"
};

const entree6 = {
    starter: "Potatoes Anna",
    main: "Beef Tenderloin",
    dessert: "Grand Raspberry Trifle"
};

const entree7 = {
    starter: "Potatoes with Parsley",
    main: "Boeuf Bourguignon",
    dessert: "Cream Puffs"
};

const entree8 = {
    starter: "Pancetta-Wrapped Figs",
    main: "Turkey Breast",
    dessert: "Chocolate Ganache Cake"
};

const entree9 = {
    starter: "Artichoke Turnovers",
    main: "Oregano and Orange Rack of Lamb with Caramelized Fingerling Potatoes",
    dessert: "Chocolate and Nut Yule Log"
};

const entree10 = {
    starter: "Stir Fried Chilli Chicken",
    main: "Jollof Rice And Fried Rice",
    dessert: "Cream Puffs"
};

const meals = [entree1, entree2, entree3, entree4, entree5, entree6, entree7, entree8, entree9, entree10];

const randomMeal = function () {
    let mealNumber = Math.floor(Math.random() * meals.length);
    console.log(mealNumber);
    showMeal(mealNumber);
}

const showMeal = (mealNumber) => {
    console.log("yes");
    let str = "Start with " + meals[mealNumber].starter + ", followed by " + meals[mealNumber].main + ", and finish off with " + meals[mealNumber].dessert;
    console.log(str);
    let area = document.querySelector(".randomMeal");
    area.innerHTML = str;
    alert("Your Dinner Is Decided! You Are Welcome");
}
console.log("Done");