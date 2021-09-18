// interface ICalculator {
//     add (num1: number, num2: number): number;
//     subtract(num1: number, num2: number): number;
//     divide?(num2: number, num1: number): number; // it is optional

// }

// class Calculator implements ICalculator {

//     add(num1: number, num2: number): number {
//        return num1 + num2;
//     }
//     subtract(num1: number, num2: number): number {
//         return num2 - num1;
//     }

// }

interface IApiresponse {
    name: string;
    account: number;

}

function APIresponse () : IApiresponse {
    return {name: "anshuman",
            account : 123123};
}