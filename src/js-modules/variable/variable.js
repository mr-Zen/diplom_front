export const form = document.forms.search;
export const formInput = form.elements.news;
export const errorMessage = document.querySelector("#errorText");
export const searchBtn = document.querySelector("#searchBtn");


export const config = {
    apiKey: "apikey=6e287fb17dcf42a3a51faf1b5a90d8b7",
    q: "q=Apple", //formInput.value,
    from: "from=2019-11-20",
    to:"to=2019-11-21",
    pageSize: "pageSize=100",
}