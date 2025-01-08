import { useState } from "react"

export default function Factorial() {
  const [input, setInput] = useState<number>(0)
  const [output, setOutput] = useState<null | number>(null)

  function run() {
    let num = 1;
    for (let i = input; i > 0; i--) {
      num = num * i
    }
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
    <pre>
      <code>{output}</code>
    </pre>
  </div>
}
