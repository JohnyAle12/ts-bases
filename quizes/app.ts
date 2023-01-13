(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerza{
      flash = 5,
      superMan = 100,
      batman = 1,
      acuaman = 0
    }
    const fuerzaFlash: Fuerza = Fuerza.flash;
    const fuerzaSuperman: Fuerza = Fuerza.superMan;
    const fuerzaBatman: Fuerza = Fuerza.batman;
    const fuerzaAcuaman: Fuerza = Fuerza.acuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = <number>poder.length;
    console.log( largoDelPoder );
  
  
  })()
  
  