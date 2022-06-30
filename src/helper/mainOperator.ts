const MainOperator = (
    opr: string, 
    res: string, 
    val: number, 
    setNum1: any, 
    setResult: any, 
    num1: number, 
    func: any
): number => {
    let finalRes = 0;
    if (!res) {
        setNum1(val);
        setResult(`${val} ${opr}`);
    } else {
        finalRes = func(num1, val);
        setNum1(finalRes);
        setResult(`${finalRes} ${opr}`);
    }

    return finalRes;
};

export default MainOperator;
