const calculateFactorial = (val, acc = 1) => val <= 1 ? acc : calculateFactorial(val - 1, acc * val)

export { calculateFactorial }