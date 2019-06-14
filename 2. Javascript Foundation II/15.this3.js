const character = {
    name: 'Hayk',
    getCharacter() {
      return this.name;
    }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  
console.log('?', giveMeTheCharacterNOW());