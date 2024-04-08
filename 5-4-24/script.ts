// Q1
function typeConversion(arr: number[]): string[] {
  const array: string[] = arr.map((el) => {
    return el.toString();
  })
  return array;
}
const arr = [1,2,34,5,3,6,6];
console.log(typeConversion(arr));

// Ans
function correctTypeConversion<T, U>(arr: T[], cb:(el: T) => U) {
  return arr.map(el => cb(el));
}


// Q2
type NamenAge = {
  name: string,
  age: number
}

type Age = {
  name: string;
}

// const val4: NamenAge = {name:"dhvi",age:34}
// const val5: Age = {age: 89};
// const val3: NamenAge[Age] = 

// Ans
type OmitKey<NamenAge, Age extends keyof NamenAge> = Pick<NamenAge, Exclude<keyof NamenAge, Age>>


// Q3
type InitType = {
  name: string,
  age: number
}

type Optional = {
  name: string
}

// const val: InitType = {name:"dhvi",age:34}
// const val2: MakeOptional = {name:'ui'}
// function changeType(param: InitType):  {
//   return 
// }
// console.log(changeType(val, []));

// Ans
type Nullable<InitType> = {
  [Optional in keyof InitType]?: InitType[Optional]
}

