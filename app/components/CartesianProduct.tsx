
import { useState } from "react"

export default function CartesianProduct() {
  const [output, setOutput] = useState<string>("")
  const [array1, setArray1] = useState<string>("")
  const [array2, setArray2] = useState<string>("")

  function cartesianProduct(arr1: number[], arr2: number[]) {
    let product = []
    for (let i = 0; i <= arr1.length - 1; i++) {
      for (let j = 0; j <= arr2.length - 1; j++) {
        product.push([arr1[i], arr2[j]])
      }
    }

    return product;
  }

  function run() {
    const arr1 = JSON.parse(array1)
    const arr2 = JSON.parse(array2)
    const product = cartesianProduct(arr1, arr2)
    setOutput(JSON.stringify(product))
  }

  return <div className="flex flex-col gap-2">
    <textarea value={array1} onChange={(e) => setArray1(e.target.value)} placeholder="[5,4,8,2,9,0]"
      className="p-2 rounded-md text-black"
    />
    <textarea value={array2} onChange={(e) => setArray2(e.target.value)} placeholder="[5,4,8,2,9,0]"
      className="p-2 rounded-md text-black"
    />
    <button onClick={run} className="p-2 rounded-md text-white bg-green-500">Run</button>
    <pre>
      <code>{output}</code>
    </pre>
  </div>
}
