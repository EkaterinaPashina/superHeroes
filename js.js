const cards = document.getElementById('cards');
const superHeroesObj = JSON.parse(JSON.stringify(superheroes));
console.log(superHeroesObj);

function createCard(superhero) {
    const superheroes = document.createElement('div');
    const superherocard = `<section class="hero">
    <div class="hero__img">
        <img src="${superhero.url}" alt="${superhero.name}">
    </div>
    <h2 class="hero__name">${superhero.name}</h2>
    <p class="hero__universe"><span class="header">Вселенная: </span>${superhero.universe}</p>
    <p class="hero__alterego"><span class="header">Альтер эго: </span>${superhero.alterego}</p>
    <p class="hero__occupation"><span class="header">Род деятельности: </span>${superhero.occupation}</p>
    <p class="hero__friends"><span class="header">Друзья: </span>${superhero.friends}</p>
    <p class="hero__superpowers"><span class="header">Суперсилы: </span>${superhero.superpowers}</p>
    
</section>`;
    superheroes.setAttribute('class', 'card');
    superheroes.innerHTML = superherocard;
    return superheroes;
};

for (let superhero of superHeroesObj) {
    let createsuperhero = createCard(superhero);
    cards.append(createsuperhero);
};