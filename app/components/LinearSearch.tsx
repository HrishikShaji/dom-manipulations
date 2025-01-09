
import { useState } from "react"

export default function LinearSearch() {
  const [input, setInput] = useState<number>(0)
  const [output, setOutput] = useState<string>("")
  const [array, setArray] = useState<number[]>([1, 2, 5, 7, 9, 10])

  function linearSearch(num: number, arr: number[]) {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === num) {
        return i
      }
    }

    return -1

  }

  function run() {
    const index = linearSearch(input, array)
    console.log("index is", index)
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
