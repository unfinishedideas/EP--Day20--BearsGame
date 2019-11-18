export class Bear {
  constructor (name) {
    this.name = name;
    this.hunger = 20;
    this.attention = 20;
    this.sleep = 20;
    this.alive = true;
  }
  sayHello(){
    return "Hi! My name is " + this.name + "!";
  }
  slowlyDie(){
    this.hunger --;
    this.attention --;
    this.sleep --;
  }
  feedBear(){
    this.hunger = 20;
  }
  giveAttention(){
    this.attention = 20;
  }
  letSleep(){
    this.sleep = 20;
  }

}
