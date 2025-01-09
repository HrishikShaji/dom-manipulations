

import { useState } from "react"

export default function QuickSort() {
  const [output, setOutput] = useState<string>("")
  const [array, setArray] = useState<string>("")


  function quickSort(arr: number[]): number[] {
    if (arr.length < 2) {
      return arr
    }

    let pivot = arr[arr.length - 1]
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

  }

  function run() {
    console.log(JSON.parse(array))
    const arr = JSON.parse(array)
    const sortedArray = quickSort(arr);
    setOutput(JSON.stringify(sortedArray))
  }

  return <div className="flex flex-col gap-2">
    <textarea value={array} onChange={(e) => setArray(e.target.value)} placeholder="[5,4,8,2,9,0]"
      className="p-2 rounded-md text-black"
    />
    <button onClick={run} className="p-2 rounded-md text-white bg-green-500">Run</button>
    <pre>
      <code>{output}</code>
    </pre>
  </div>
}
