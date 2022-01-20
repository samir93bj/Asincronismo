const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => {
            resolve('Resuelto ok')  
        }, 2000)
            : reject(new Error ('Test Error'));
    }); 
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething(); // Al utilizar un setTimeOut se temina mostrando al final de todo ya que primero ejecuta lo mas rapido
console.log('After');

/*CON CAPTURA DE ERRORES */
const doSomething2 = async() => {
    try{
            const something = await doSomethingAsync();
            console.log(something);
                
    }catch(err){
        console.log(err);
    }
};

console.log('Before');
doSomething(); // Al utilizar un setTimeOut se temina mostrando al final de todo ya que primero ejecuta lo mas rapido
console.log('After');