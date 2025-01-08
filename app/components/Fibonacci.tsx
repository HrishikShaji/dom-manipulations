import { useState } from "react";

export default function Fibonacci() {
  const [output, setOutput] = useState<string>("")
  const [input, setInput] = useState<number>(0)

  function fibonacci(n: number) {
    let arr: number[] = [0, 1]
    for (let i = 2; i <= input; i++) {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
  }

  function run() {
    const arr = fibonacci(input)
    setOutput(JSON.stringify(arr))
  }

  function recursiveFibonacci(n: number) {

    let arr: number[] = [0, 1]
    function addNum(i: number) {
      arr[i] = arr[i - 1] + arr[i - 2]
      if (i < n) {
        addNum(i + 1)
      }
    }
    addNum(2)
    return arr

  }

  function runRecursive() {
    const arr = recursiveFibonacci(input)
    setOutput(JSON.stringify(arr))
  }

  return (
    <div>
      <h1>Fibonacci</h1>
      <input
        onChange={(e) => setInput((parseInt(e.target.value)))}
        placeholder="Enter the number"
        className="p-2 rounded-md text-black"
        value={input}
        type="number"
      />
      <button className="bg-green-500 text-white p-2 rounded-md" onClick={run}>Run</button>
      <button className="bg-green-500 text-white p-2 rounded-md" onClick={runRecursive}>Run Recursive</button>
      <pre>
        <code>{output}</code>
      </pre>
    </div>
  );
}
