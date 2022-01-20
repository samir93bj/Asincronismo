const somethingWillHappen = () => {
    return new Promise((resolve,reject) => {
        if(true) {
            resolve('Hey');
        }
        else{
            reject('Upss!');
        }
    });
}

somethingWillHappen()
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject));


const somethingWillHappen2 =() => {
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('True')
            }, 3000);
        }
        else{
            const error = new Error('Ups!');
            reject(error);
        }

    })
}

/*
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));
*/

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response =>{
    console.log("Array of results", response);
})
.catch(err => {
    console.log("Errores", err);
});