import { add } from '../src/dependency';

it('adds two numbers and returns the result', () => {
    const result = add(30, 12);
    expect(result).toEqual(42);
});

it('should fail on type violations but doesnt', () => {
    // This is a type error that doesn't get caught using babel typescript compilation, 
    // because it only transpiles and doesn't do type checking. 
    // let a:number = "Definitely not a number.";

    // Fixed this by using ts-jest instead
    let a:string = "Definitely not a number.";
    expect(a).toEqual("Definitely not a number.");
});