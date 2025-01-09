import { useState } from "react"

export default function BinarySearch() {
  const [input, setInput] = useState<number>(0)
  const [output, setOutput] = useState<string>("")
  const [array, setArray] = useState<number[]>([1, 2, 5, 7, 9, 10])

  function binarySearch(num: number, arr: number[]) {

    let startIndex = 0;
    let endIndex = arr.length - 1

    while (startIndex <= endIndex) {
      const middleIndex = Math.floor((endIndex + startIndex) / 2);

      if (arr[middleIndex] === num) {
        return middleIndex
      }

      if (num > arr[middleIndex]) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex - 1
      }
    }

    return -1

  }

  function run() {
    const index = binarySearch(input, array)
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

