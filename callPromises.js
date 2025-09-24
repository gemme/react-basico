  const getName = (value) => new Promise(
  (resolve, reject) =>{
    
    setTimeout(()=>{
      if(value){
        resolve('Ernesto'); 
      }
      reject('Failed getting name')
    }, 3000)
    
  });

  const createUser = (value) => new Promise(
  (resolve, reject) =>{
    
    setTimeout(()=>{
      if(value){
        resolve('User :' + value + ' created succesfully'); 
      }
      reject('Failed creating user')
    }, 3000)
    
  });

const getUserById = (value) => new Promise(
  (resolve, reject) =>{
    
    setTimeout(()=>{
      if(value){
        resolve('User id: ' + value); 
      }
      reject('Failed getting user')
    }, 3000)
    
  });
  const getUserByName = (value) => new Promise(
  (resolve, reject) =>{
    
    setTimeout(()=>{
      if(value){
        resolve('User name: '+ value); 
      }
      reject('Failed getting user')
    }, 6000)
    
  });

const callPromisesInSeries = async () => {
    try{
        const name = await getName(true);
        const result = await createUser(name);
        console.log(result);

        const listResult = await Promise.all([
            getUserById(1),
            getUserByName('Manuel')
        ]);

        console.log(listResult);

    }catch(error){
        console.log(error);
    }
}

callPromisesInSeries();