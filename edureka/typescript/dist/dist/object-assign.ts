const person = {name:"ansh", job: "developer"};
const managerEmp ={job:"manager"}
const manager = (<any>Object).assign({}, person, managerEmp);
console.log(manager);//{name:"anshuman", job:"manager"}


// the above is same as
console.log({...person, ...managerEmp}); //{name:"anshuman", job:"manager"}