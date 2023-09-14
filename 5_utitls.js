const sayHi = (names) => {
   for(a in names){
    console.log(`hi ${a}`);
   }
}

const displayName = () =>{
    console.log('hi')
}

module.exports = { sayHi, displayName}