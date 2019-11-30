class ApiGit {
    constructor() {
          
    }
    getCommit() {
        return(
            fetch(`https://api.github.com/repos/mr-Zen/diplom_front/commits`, {
                method: "GET" 
            })
            .then(res => {
                if(res.ok) {
                  return res.json(); 
                }
                return Promise.reject(res.status);
            })
            .catch(err => {
                console.log("Ошибка", err)
            })
        )
    }
    
    
  }
  export const apiGit = new ApiGit()
  