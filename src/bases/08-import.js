import { heroes } from '../data/heroes.js';

console.log(heroes);
const getHeroById = (id) => heroes.find((hero) => hero.id === id);
console.log(getHeroById(2));
const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
console.log(getHeroesByOwner('Marvel'));

