
class Department {
    name : string;

    constructor(n:string){
        this.name = n;
    }

    describe(this:Department){   //Here this declare as Class type
        console.log('Department is ' + this.name);
    }
}
let department = new Department('Scripting');
console.log(department);    // Department {name: "Scripting"}
console.log(department.describe());  // Department is Scripting

let accountingCopy = {name:'Mayur', describe:department.describe}
accountingCopy.describe(); // Department is Mayur

/**///////////////////////////////////////////////////////////////////////////////////// */
/**///////////////////////////////////////////////////////////////////////////////////// */

class Rectangle{
    width:number;
    height:number;
    surface: string;
    constructor(w: number, h: number, s:string){
        this.width = w;
        this.height = h;
        this.surface = s;
    }

    areaOfRectangle(){
        let area = this.width * this.height;
        console.log(area);
    }

    sideOfRect(){
        let sideAddition = this.width + this.height;
        console.log('Sides are ' + sideAddition);
    }
}

let rectangle = new Rectangle(20, 30, 'plane');
rectangle.areaOfRectangle();
rectangle.sideOfRect();

let inputValW : number;
let inputValH : number; 
let inputValS : string;

function getInputValues(){
    inputValW = Number((document.getElementById("myInputW") as HTMLInputElement).value);
    inputValH = Number((document.getElementById("myInputH") as HTMLInputElement).value);
    inputValS = ((document.getElementById("myInputS") as HTMLInputElement).value);
    console.log(inputValW , inputValH, inputValS);
}
/**///////////////////////////////////////////////////////////////////////////////////// */
var Foo = class NamedFoo {
    name:string;
    constructor(nm:string) {
        this.name = nm;
    }
    whoIsThere() {
      return this.name;
    }
  }
  var bar = new Foo('aaa');
  bar.whoIsThere(); // "NamedFoo"
  


