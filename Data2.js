const fs = require('fs');

const addPerson = (id, fname, lname, age) => {
    const allpersons = loadPersons();
    const duplicatePerson = allpersons.filter((object) => {
        return object.id === id
    })
    if (duplicatePerson.length === 0) {
        allpersons.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
        });

        savePersons(allpersons);
    }else{
        console.log("Duplicate ID")
    }
};

const loadPersons = () => {
    const dataJson = fs.readFileSync("person.json").toString();
    return JSON.parse(dataJson);
};

const savePersons = (allpersons) => {
    const allpersonsJson = JSON.stringify(allpersons);
    fs.writeFileSync("person.json", allpersonsJson);
};
const deletePerson = (id) => {
    const allpersons = loadPersons();
    const keepinPersons=allpersons.filter((object)=>{
        return object.id !== id
})
console.log(keepinPersons)
console.log("deleted successfully")
savePersons(keepinPersons)
}
const  readPersons = (id) => {
    const allpersons = loadPersons();
    const item=allpersons.find((object)=>{
        return object.id === id
})
if(item){
    console.log(item)
}else{
    console.log("Item not found")
}
}
module.exports = {
    addPerson,
    deletePerson,
    readPersons
};