#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(n) {
        this.name = n;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent extends Player {
}
let player = await inquirer.prompt({
    name: "P1",
    type: "input",
    message: "Enter player name:"
});
let opponent = await inquirer.prompt({
    name: "Opp",
    type: "list",
    message: "Select your opponent.",
    choices: ["Skeleton", "Alien", "Zombie"]
});
let p1 = new Player(player.P1);
let oop = new Opponent(opponent.Opp);
console.log(`\n${chalk.bold.green(p1.name)} VS ${chalk.bold.red(oop.name)}\n`);
while (true) {
    //Skeleton
    if (opponent.Opp == "Skeleton") {
        let ask = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink Portion", "Run For Your Life...."]
        });
        if (ask.select == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${oop.name} fuel is ${oop.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("\nYou Loose, Better Luck Next Time\n");
                    process.exit();
                }
            }
            else if (num <= 0) {
                oop.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${oop.name} fuel is ${oop.fuel}`);
                if (oop.fuel <= 0) {
                    console.log("\nYou Win.\n");
                    process.exit();
                }
            }
        }
        if (ask.select == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`\nYou restored your health and your fuel is ${p1.fuel}\n`);
        }
        if (ask.select == "Run For Your Life....") {
            console.log("\nYou Loose, Better Luck Next Time\n");
            process.exit();
        }
    }
    //Alien
    if (opponent.Opp == "Alien") {
        let ask = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink Portion", "Run For Your Life...."]
        });
        if (ask.select == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${oop.name} fuel is ${oop.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("\nYou Loose, Better Luck Next Time\n");
                    process.exit();
                }
            }
            else if (num <= 0) {
                oop.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${oop.name} fuel is ${oop.fuel}`);
                if (oop.fuel <= 0) {
                    console.log("\nYou Win.\n");
                    process.exit();
                }
            }
        }
        if (ask.select == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`\nYou restored your health and your fuel is ${p1.fuel}\n`);
        }
        if (ask.select == "Run For Your Life....") {
            console.log("\nYou Loose, Better Luck Next Time\n");
            process.exit();
        }
    }
    //Zombie
    if (opponent.Opp == "Zombie") {
        let ask = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "What would you like to do?",
            choices: ["Attack", "Drink Portion", "Run For Your Life...."]
        });
        if (ask.select == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${oop.name} fuel is ${oop.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("\nYou Loose, Better Luck Next Time\n");
                    process.exit();
                }
            }
            else if (num <= 0) {
                oop.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${oop.name} fuel is ${oop.fuel}`);
                if (oop.fuel <= 0) {
                    console.log("\nYou Win.\n");
                    process.exit();
                }
            }
        }
        if (ask.select == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`\nYou restored your health and your fuel is ${p1.fuel}\n`);
        }
        if (ask.select == "Run For Your Life....") {
            console.log("\nYou Loose, Better Luck Next Time\n");
            process.exit();
        }
    }
}
