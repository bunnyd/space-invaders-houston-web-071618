class Spaceship {
  constructor(name, crew_arr, phasers, shields){
    this.name = name;
    this.crew = crew_arr;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    !this.crew.length ? this.docked = true : this.docked = false;
    this.phasersCharge = "uncharged"
    this.giveCrewSpaceship();
  }

  giveCrewSpaceship(){
    if (this.crew.length > 0)
      this.crew.forEach(member => member.currentShip = this)
  }
}
