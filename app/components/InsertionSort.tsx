

import { useState } from "react"

export default function InsertionSort() {
  const [output, setOutput] = useState<string>("")
  const [array, setArray] = useState<string>("")


  function insertionSort(arr: number[]) {
    for (let i = 1; i <= arr.length - 1; i++) {
      let numberToInsert = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j];
        j = j - 1
      }
      arr[j + 1] = numberToInsert
    }
    return arr
  }

  function run() {
    console.log(JSON.parse(array))
    const arr = JSON.parse(array)
    const sortedArray = insertionSort(arr);
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
