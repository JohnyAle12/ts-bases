namespace Validations{
    export const validText = (text:string): boolean => {
        return (text.length<3) ? true : false;
    }
}

console.log(Validations.validText('Hola'));
