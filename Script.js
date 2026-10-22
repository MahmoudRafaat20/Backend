const  fs = require('fs');

fs.writeFileSync("data.txt","Hello, World!")

console.log(fs.readFileSync("data.txt").toString());

fs.appendFileSync("data.txt", "Mahmoud Rafaat");
const validator = require ('validator');

console.log(validator.isEmail("mahmoud@gmail.com"))

const commande=process.argv[2];

if(commande=="add"){
    console.log("Added item successfully")
}else if(commande=="delete"){
    console.log("Deleted item successfully")
}else{
    console.log("Invalid command")
}
const data2=require("./Data2.js");
const yargs = require('yargs');


yargs.command({
    command: "add",
    describe: "to add a person",

    builder: {
        id: {
            describe: "the person id",
            demandOption: true,
            type: "number"
        },
        fname: {
            describe: "the first name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "the last name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "the age",
            demandOption: true,
            type: "number"
        }
    },

    handler: (x) => {
        data2.addPerson(x.id, x.fname, x.lname, x.age);
    }
});


yargs.command({
    command: 'delete',
    describe: 'Delete an item',
    handler: (x)=>{
        data2.deletePerson(x.id);
    }
})
yargs.command({
    command: 'read',
    describe: 'Read an item',
    builder: {
      id:{
        describe: "the person id",
        demandOption: true,
        type: "number"
      }
    },
    handler: (x)=>{
        data2.readPersons(x.id);
    }
})
yargs.parse()

