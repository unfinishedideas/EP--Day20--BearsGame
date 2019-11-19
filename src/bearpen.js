export class Bearpen {
  constructor(){
    this.bearArray = [];
    this.id = 0;
  }
  addBear (bear){
    bear.id = this.assignId();
    this.bearArray.push(bear);
  }
  assignId (){
    this.id += 1;
    return this.id;
  }
  findBear (id){
    for (var i=0; i<this.bearArray.length; i++){
      if (this.bearArray[i]) {
        if (this.bearArray[i].id == id) {
          return this.bearArray[i];
        }
      }
    }
    return false;
  }
  destroyBear(id){
    for (var i=0; i<this.bearArray.length; i++){
      if (this.bearArray[i]) {
        if (this.bearArray[i].id == id) {
          this.bearArray.splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

} // close class
