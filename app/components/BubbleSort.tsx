
import { useState } from "react"

export default function BubbleSort() {
  const [output, setOutput] = useState<string>("")
  const [array, setArray] = useState<string>("")


  function bubbleSort(arr: number[]) {
    let newArr = arr;
    let swapped
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (newArr[i] < newArr[i + 1]) {
          let temp = newArr[i];
          newArr[i] = newArr[i + 1];
          newArr[i + 1] = temp
          swapped = true;
        }
      }
    } while (swapped)

    return newArr;

  }

  function run() {
    console.log(JSON.parse(array))
    const arr = JSON.parse(array)
    const sortedArray = bubbleSort(arr);
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
