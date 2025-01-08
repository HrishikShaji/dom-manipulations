import { useState } from "react"

export default function Factorial() {
  const [input, setInput] = useState<number>(0)
  const [output, setOutput] = useState<null | number>(null)

  function factorial(n: number) {
    let num = 1;
    for (let i = n; i > 0; i--) {
      num = num * i
    }
    return num;
  }

  function recursiveFactorial(n: number) {

    function multiply(i: number, acc: number) {
      if (i <= 0) {
        return acc;
      }
      return multiply(i - 1, i * acc)
    }

    return multiply(n, 1)

  }


  function run() {
    const num = factorial(input)
    setOutput(num)
  }

  function runRecursive() {
    const num = recursiveFactorial(input)
    setOutput(num)
  }

  return <div className="flex flex-col gap-2">
    <input
      className="p-2 rounded-md text-black"
      placeholder="Enter number"
      value={input}
      onChange={(e) => setInput(parseInt(e.target.value))}
      type="number"
    />
    <button onClick={run} className="p-2 rounded-md text-white bg-green-500">Run</button>
    <button onClick={runRecursive} className="p-2 rounded-md text-white bg-green-500">Run Recursive</button>
    <pre>
      <code>{output}</code>
    </pre>
  </div>
}
