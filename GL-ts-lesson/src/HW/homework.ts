export const sum: any = (...a: number[]) =>
  a.reduce((acc:number , val: number) => acc + val, 0);

export const sumSalaries: any = (salaries: { [key: string]: number }) =>
  Object.keys(salaries).reduce((acc: number, key: string) => acc + salaries[key], 0);
  
export const maxSalaries: any = (salaries: { [key: string]: number }) =>{
  let arr: number[] = [];
  for(let item of Object.keys(salaries)){
      arr.push(salaries[item])
  }  
  return Object.keys(salaries).find((key) => salaries[key] === Math.max.apply(null,arr));  
}

// умножить на 2 значения
// function isNumeric(n: string | number): boolean {
//   if (typeof n === 'number') {
//     return true;
//   }
//   return false;
// }

// export function multiplyNumeric(menu: { [key: string]: number | string }): any{
//   let newObj: {[key: string]: number | string} = {};
//   for(let item of Object.keys(menu)){
//     if(isNumeric(menu[item])){
//       newObj[item] = (menu[item] as number) + (menu[item] as number);
//     }
//     newObj[item] = menu[item];
//   }
//   return newObj;
// }

export function funcOfList(a: number, b:number){
  let arr: number[] =[]
  for (let i:number = 1; i <= b; i++){
    arr.push(i)
  }
  return arr.filter((item:number) => item % a == 0)
}

// последнее задние
// export function addClass(objClass: {(key:string) : string}, newClass: string){
//   let arrClassArr: string[] = Object.keys(objClass) ? Object.keys(objClass)[0].split(' ') : [];

//   for (let i:number = 0; i < arrClassArr.length; i++) {
//     if (arrClassArr[i] == newClass) {
//       return;
//     };
//   }
// }
