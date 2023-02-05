export default class Device{
    constructor(name,chip,user){
        this.name = name;
        this.chip = chip;
        this.user = user;
    }
    getName(){ 
        return this.name;
    }
    getChip(){
        return this.chip;
    }
    setName(name){
        this.name = name;
    }
    setChip(chip){
        this.chip = chip;
    }

    getCodeforHardware() {
        
    }
    
}
