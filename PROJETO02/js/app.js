// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const page = 1;
const baseUrl = "https://rickandmortyapi.com/api";

const loadCharacter = async () => {
  try {
    const res = await fetch(`${baseUrl}/character?page=${page}`);
    if (!res.ok) {
      throw new Error("Erro ao buscar characteres");
    }
    const data = await res.json();
    const limitData = data.results.slice(3, 9);
    return { results: limitData };
  } catch (error) {
    console.log("Erro: ", error);
  }
};

const loadLocation = async () => {
  try {
    const res = await fetch(`${baseUrl}/location`);
    if (!res.ok) {
      throw new Error("Erro ao buscar localizações");
    }
    const data = await res.json();
    const limitData = data.results.slice(0, 10);
    return { results: limitData };
  } catch (error) {
    console.log("error: ", error);
  }
};

const loadEpisode = async () => {
  try {
    const res = await fetch(`${baseUrl}/episode`);
    const data = await res.json();
    return { results: data };
  } catch (error) {
    console.log("error: ", error);
  }
};

const loadAllWithPromise = async () => {
  const [character, location, episode] = await Promise.all([
    loadCharacter(),
    loadLocation(),
    loadEpisode(),
  ]);

  showCharacter(character.results);
  //   console.log(location)
  //   console.log(episode)
};
loadAllWithPromise();

const showCharacter = (characteres) => {
  console.log(characteres);
  const characterContainer = document.getElementById('character-container')
  characteres.map((charactere) => {
    const divCharacter = document.createElement('div')
    divCharacter.id = `character-${charactere.id}`
    divCharacter.innerHTML = `
        <img id="img-character" src="${charactere.image}" />
        <article class="character-info">
            <h3>${charactere.name}</h3>
            <span class="${charactere.status}"> ${charactere.status} - ${charactere.species}</span>
<br>
            <span class="location" >Location:</span>
            <a class="character-link" href="${charactere.location.url}">${charactere.location.name}</a>
<br>
            <span class="location" >Origin:</span>
            <a class="character-link" href="${charactere.origin.url}">${charactere.origin.name}</a>
        </article>
    `
    divCharacter.classList.add('character-box')
    characterContainer.appendChild(divCharacter)
    divCharacter.addEventListener('click', () => {
      characterDetails(charactere.id)
    })
  })
};

const characterDetails = (id) => {
  //console.log(id);
  window.location.href = `../pages/character.html?id=${id}`
}