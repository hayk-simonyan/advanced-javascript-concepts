class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
}
  
class Elf extends Character { 
    constructor(name, weapon, type) {
      super(name, weapon) 
      console.log('what am i?', this);
      this.type = type;
    }
}
  
class Ogre extends Character {
    constructor(name, weapon, color) {
      super(name, weapon);
      this.color = color;
    }
    makeFort() { 
      return 'strongest fort in the world made'
    }
}
  
const houseElf = new Elf('Dolby', 'cloth', 'house')
//houseElf.makeFort() // error
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.makeFort()
  