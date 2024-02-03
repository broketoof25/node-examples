const outerFn = () => {
    const x = 5;
    const innerFn = () => console.log(x);
    innerFn();
};
const closureTest = outerFn();