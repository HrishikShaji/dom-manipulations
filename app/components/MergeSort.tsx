import { useState } from "react"

export default function MergeSort() {
  const [output, setOutput] = useState<string>("")
  const [array, setArray] = useState<string>("")


  function mergeSort(arr: number[]): number[] {
    if (arr.length < 2) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
  }

  function merge(leftArr: number[], rightArr: number[]): number[] {
    const sortedArr: number[] = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift() as any)
      } else {
        sortedArr.push(rightArr.shift() as any)
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
  }

  function run() {
    console.log(JSON.parse(array))
    const arr = JSON.parse(array)
    const sortedArray = mergeSort(arr);
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
