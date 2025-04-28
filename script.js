const submitButton = document.querySelector('button');
const pokemonName = document.querySelector('#pokemonName');
const pokemonType = document.querySelector('#pokemonType');
const pokemonAbility = document.querySelector('#pokemonAbility');
const pokemonDisplayName = document.querySelector('#pokemonDisplayName');
const pokemonHeight = document.querySelector('#pokemonHeight');
const resultBox = document.querySelector('#resultBox');
const pokemonImg = document.querySelector('#pokemonSprite');
const pokemonNotFound = document.querySelector('#notFound');
const pokemonWeight = document.querySelector('#pokemonWeight'); 

async function getPokemon(){
    try {
        const pokemonSelected = pokemonName.value.trim().toLowerCase();
        const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`);

        if (!req.ok){
            pokemonNotFound.style.display = 'block';
            resultBox.style.display = 'none';
            throw new Error('Could not fetch Pokémon...');
        }

        const data = await req.json();
        const pokemonSprite = data.sprites.front_default;
        const name = data.name;
        const type = data.types?.[0]?.type?.name || 'unknown';
        const ability = data.abilities?.[0]?.ability?.name || 'unknown';
        const height = data.height / 10;
        const weight = data.weight / 10;
        const typeColor = getType(type);

        pokemonNotFound.style.display = 'none';
        pokemonImg.src = pokemonSprite;
        pokemonImg.style.display = 'block';
        resultBox.style.display = 'flex';

        pokemonDisplayName.textContent = `${name.charAt(0).toUpperCase() + name.slice(1)}`;
        pokemonType.innerHTML = `<span style="background-color: ${typeColor}; padding: 2px 5px; border-radius: 3px; color: white;">${type.charAt(0).toUpperCase() + type.slice(1)}</span>`;
        pokemonAbility.textContent = `Ability: ${ability.charAt(0).toUpperCase() + ability.slice(1)}`;
        pokemonHeight.textContent = `Height: ${height.toFixed(1)} m`;
        pokemonWeight.textContent = `Weight: ${weight.toFixed(1)} kg`;

    } catch (error){
        console.log(error);
    }
}

submitButton.addEventListener('click', getPokemon);

pokemonName.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (pokemonName.value === '') {
            resultBox.style.display = 'none';
            return;
        }
        event.preventDefault();
        getPokemon();
    }
})

function getType(type) {
    switch (type) {
        case 'normal':
            return '#A8A77A';
        case 'fire':
            return '#EE8130';
        case 'water':
            return '#6390F0';
        case 'electric':
            return '#F7D02C';
        case 'grass':
            return '#7AC74C';
        case 'ice':
            return '#96D9D6';
        case 'fighting':
            return '#C22E28';
        case 'poison':
            return '#A33EA1';
        case 'ground':
            return '#E2BF65';
        case 'flying':
            return '#A98FF3';
        case 'psychic':
            return '#F95587';
        case 'bug':
            return '#A6B91A';
        case 'rock':
            return '#B6A136';
        case 'ghost':
            return '#735797';
        case 'dragon':
            return '#6F35FC';
        case 'dark':
            return '#705746';
        case 'steel':
            return '#B7B7CE';
        case 'fairy':
            return '#D685AD';
        default:
            return 'gray';
    }
}