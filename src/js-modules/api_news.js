import{config} from "./variable/variable"


export class ApiNews {
    constructor({ip,apiKey, q, from, to, pageSize}) {
        this.apiKey = apiKey;
        this.q = q;
        this.from = from;
        this.to = to;
        this.pageSize = pageSize;
    }
    getNews() {
        return(
            fetch(`https://newsapi.org/v2/everything?${this.q}&${this.from}&${this.to}&language=ru&${this.pageSize}&${this.apiKey}`, {
                method: "GET",
                // headers: {
                //     authorization: this.apiKey,
                //     "Content-Type": "application/json"
                // }
            })
            .then(res => {
                if(res.ok) {
                    console.log(res.json)
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

export const apiNews = new ApiNews(config)
