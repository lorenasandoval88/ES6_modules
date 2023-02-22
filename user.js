class User{
    constructer(name, age){
        this.name = name
        this.age = age
    }
}

function printName(user){
    console.log(`User is ${user.name}`)
}

function printAge(user){
    console.log(`User is ${user.age} years old`)
}

export default User
export { printName, printAge}