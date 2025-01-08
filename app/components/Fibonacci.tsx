import { useState } from "react";

export default function Fibonacci() {
  const [output, setOutput] = useState<string>("")
  const [input, setInput] = useState<number>(0)

  function run() {
    let arr: number[] = [0, 1]
    for (let i = 2; i <= input; i++) {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
    setOutput(JSON.stringify(arr))
  }

  return (
    <div>
      <h1>Fibonacci</h1>
      <input
        onChange={(e) => setInput((parseInt(e.target.value)))}
        placeholder="Enter the number"
        className="p-2 rounded-md text-black"
        value={input}
        type="number"
      />
      <button onClick={() => run()}>Run</button>
      <pre>
        <code>{output}</code>
      </pre>
    </div>
  );
}
