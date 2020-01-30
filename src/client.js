import './pages/client.css';
import { getMonth } from "./js-modules/helpers";
import { ApiGit } from "./js-modules/api/apiGit";
import { GitCards } from "./js-modules/class/cardsGit";
import Swiper from "swiper";
const apiGit = new ApiGit();

function renderGit() {
    apiGit.getCommit().then(res =>
      res.forEach(function(item) {
        const date = new Date(item["commit"]["committer"]["date"]);
        const { cardElement } = new GitCards(
          //Кастомная дата
          `${date.getDate()} ${getMonth(date)}, ${date.getFullYear()}`,
          item["author"]["avatar_url"],
          item["commit"]["committer"]["name"],
          item["commit"]["committer"]["email"],
          item["commit"]["message"]
        );
        document
          .querySelector(".swiper-wrapper")
          .insertAdjacentHTML("beforeend", cardElement);
        //Инициализация слайдера
        new Swiper(".swiper-container", {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          pagination: {
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            type: "bullets",
            clickable: true
          },
          slidesPerView: "auto",
          loopFillGroupWithBlank: true
        });
      })
    );
  }


renderGit()
