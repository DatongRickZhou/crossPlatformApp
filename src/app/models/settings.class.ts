export class Settings{
  direction:string = 'dsc';
  datedisplay:boolean = true;
  constructor(){
  }
  setValues(direction,datedisplay){
    this.direction = direction;
    this.datedisplay = datedisplay;
  }
}