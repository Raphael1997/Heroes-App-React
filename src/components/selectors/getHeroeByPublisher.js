import { heroes } from "../../data/heroes";

export const getHeroesByPublisher = (pusblisher) => {

    const validPublishers = ["DC Comics", "Marvel Comics"];

    if (!validPublishers.includes(pusblisher)) throw new Error(`Publosher ${pusblisher} no es correcto`);

    return heroes.filter(hero => hero.publisher === pusblisher);
}