
import { useState } from "react"

export default function PowerOfTwo() {
  const [input, setInput] = useState<number>(0)
  const [output, setOutput] = useState<string>("")

  function isPowerOfTwo(n: number) {

    if (n < 1) return false;

    while (n > 1) {
      if (n % 2 !== 0) {
        return false;
      }
      n = n / 2
    }

    return true;

  }

  function run() {
    setOutput(isPowerOfTwo(input) ? "true" : "false")
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
