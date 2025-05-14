interface IPerson {
  name: string;
  age: number;
  gender: string;
}

interface IYdh extends IPerson {
  name: "염동훈";
  // age: 78;
  // gender: "WalmartBag";
}

{
  let number: number;
  let int: number;
  let float: number;
  let string: string;
  let name: string = "홍길동";
  let check: boolean = false;
  console.log(name);
}

let fruits: string[] = ["사과", "포도"];
let fruits2: Array<string> = ["사과", "포도"];
let numbers: number[] = [1, 2, 3];
let array: (string | number)[] = [1, "apfhd"];
let array2: Array<string | number> = ["염동훈", 78];

let ydh: IYdh = {
  name: "염동훈",
  age: 78,
  gender: "WalmartBag",
};
