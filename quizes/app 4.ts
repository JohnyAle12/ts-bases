// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto{
  encender: boolean,
  velocidadMaxima: number,
  acelear(): void
}

const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason{
  reir?: boolean,
  comer: boolean,
  llorar: boolean,
}

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface City{
  ( ciudadanos:string[] ):number
}

const ciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface PersonaInterface{
  name: string,
  age: number,
  gender: boolean,
  civilState: string,
  printBio(): void
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaInterface {
  public name:string;
  public age:number;
  public gender:boolean;
  public civilState:string;

  printBio(){}
}