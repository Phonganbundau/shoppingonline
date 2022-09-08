/*

const jokeContent = document.querySelector(".joke");

const click = document.querySelector(".click");

function getJoke() 
{
    const promise = fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    } );

    promise
    .then(data => {return data.json()})
    .then(data => {
        jokeContent.textContent = data.joke;
        click.classList.add("anime");
        /*jokeContent.insertAdjacentText("afterbegin",'"');
        jokeContent.insertAdjacentText("beforeend",'"');
    })

}

function handleEvent()
{
    click.addEventListener("click",getJoke);
}
*/


const dropSelect = document.querySelector(".dropdown-select");

const dropList = document.querySelector(".dropdown-list");


dropSelect.addEventListener("click", () => {
    dropList.classList.toggle("dropdown-hidden");
});
