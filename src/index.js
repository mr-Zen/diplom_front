import './pages/index.css';
import validSubmit from './js-modules/valid_submit';
import {apiNews} from './js-modules/api_news';
apiNews.getNews().then(res => console.log(res))