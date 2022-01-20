import fetch from "node-fetch";
const API = 'https://rickandmortyapi.com/api/character/';

function getData(){
    return fetch(API)
    .then(response => response.json())
    .then(json => json)
}


async function anotherFunction(){
    try
    {
        const data = await getData();
        const character = await data.results[0];
        const origin = await fetch(character.origin.url)
            .then(response => response.json())
            .then(json => json);

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    }
    catch(error)
    {
        console.error(error)}
    }
    
anotherFunction();