const mypromise = (value) => new Promise(
  (resolve, reject) =>{
    
    setTimeout(()=>{
      if(value){
        resolve('Success'); 
      }
      reject('Failed getting users')
    }, 3000)
    
  });
const result = mypromise(true)
          .then(console.log)
          .catch(console.log);

// ES6
// async / await 

async function callPromise(){
      try {
        // 3s
        const result = await mypromise(true);
      }catch(error){
        console.log(error);
      }
} 

console.log('initializing...');

// 3000ms
console.log(result);

console.log(callPromise());

console.log('after calling promise...');





