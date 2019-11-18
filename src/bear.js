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
    setInterval(() => {
      this.hunger --;
      this.attention --;
      this.sleep --;
    }, 1000);
  }

  bearStarves(){
    if (this.hunger > 0) {
      return false;
    } else {
      return true;
    }
  }
  bearStroke(){
    if (this.sleep > 0) {
      return false;
    } else {
      return true;
    }
  }
  bearBored(){
    if (this.attention > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed(){
    this.hunger = 20;
  }
  giveAttention(){
    this.attention = 20;
  }
  letSleep(){
    this.sleep = 20;
  }

}
