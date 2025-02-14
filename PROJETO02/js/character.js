const loadCharacter = async (url, id) => {
    try {
        const res = await fetch(`${url}/${id}`)
        if (!res.ok) {
            throw new Error("Erro ao carregar personagem");
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

const loadInfo = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams);
    const idParam = urlParams.get('id')
    console.log(idParam);

    if (!idParam) {
        alert('ID não encontrado');
        return window.location.href = `../index.html`

    }
    const baseUrl = 'https://rickandmortyapi.com/api/character/'

    try {
        const character = await loadCharacter(baseUrl, idParam)
        showCharacter(character);
    } catch (error) {
        console.log(error)
    }
}
loadInfo()


const showCharacter = (person) => {
    console.log(person.episode);
    const personContainer = document.getElementById('character-container')
    person.map((persona) => {
        console.log(persona);
        console.log(pe);
        
    })
};

