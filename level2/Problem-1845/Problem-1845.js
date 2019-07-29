function solution(nums) {
    const theNumberICanTake = nums.length / 2;
    const PokemonWithoutRedundancy = [];

    for(let pokemon of nums){
        if(PokemonWithoutRedundancy.indexOf(pokemon) === -1){
          PokemonWithoutRedundancy.push(pokemon);
        }
    }
    
    const TypesOfPokemon = PokemonWithoutRedundancy.length;
    
    if(theNumberICanTake >= TypesOfPokemon){
        return TypesOfPokemon;
    }
    else{
        return theNumberICanTake;
    }
}
