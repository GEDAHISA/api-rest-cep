function getCep() {
   
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
           return response.json()
        })
        .then(function(data){
            return console.log(data)
        })
    }
    getCep()
  