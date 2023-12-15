async function getChuckNorrisJoke() {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.innerHTML = 'Carregando...';

    try {
        const translate= await fetch('https://api.chucknorris.io/jokes/random');
        const data = await translate.json();
        const joke = data.value;
        jokeContainer.innerHTML = `<p>${joke}</p>`;
    } catch (error) {
        jokeContainer.innerHTML = 'Ocorreu um erro ao obter a piada. Por favor, tente novamente mais tarde.';
    }
}