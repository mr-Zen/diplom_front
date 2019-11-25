import validSubmit from './valid_submit';
import{config} from './variable/variable'

export class ApiNews {
    constructor({apiKey, from, to, pageSize}) {
        this.apiKey = apiKey;
        this.from = from;
        this.to = to;
        this.pageSize = pageSize;
    }
    getNews(q) {
        return(
            fetch(`https://newsapi.org/v2/everything?q=${q}&from=${this.from}&to=${this.to}&language=ru&pageSize=${this.pageSize}&apikey=${this.apiKey}`, {
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

export const apiNews = new ApiNews(config)
