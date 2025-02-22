import { useState } from "react"

export default function PrimeNumber() {
  const [input, setInput] = useState<number>(0)
  const [output, setOutput] = useState<string>("")

  function isPrime(n: number) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false
    }

    return true

  }

  function run() {
    setOutput(isPrime(input) ? "true" : "false")
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
    <pre>
      <code>{output}</code>
    </pre>
  </div>
}
