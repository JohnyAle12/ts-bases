
// Objetos
type Car = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void
}

const batimovil:Car = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee:Car = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Vilanos = {
  nombre:string,
  edad?: number,
  mutante: boolean
}

const villanos: Vilanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
type Char = {
  poder:string,
  estatura:number
}

type Apocal = {
  lider:boolean,
  miembros:string[]
}

// cree dos tipos, uno para charles y otro para apocalipsis
const charles: Char = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: Apocal = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe pode  r ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;

mystique = charles;
mystique = apocalipsis;
