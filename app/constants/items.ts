import BinarySearch from "../components/BinarySearch";
import BubbleSort from "../components/BubbleSort";
import Factorial from "../components/Factorial";
import Fibonacci from "../components/Fibonacci";
import InsertionSort from "../components/InsertionSort";
import LinearSearch from "../components/LinearSearch";
import MergeSort from "../components/MergeSort";
import PowerOfTwo from "../components/PowerOfTwo";
import PrimeNumber from "../components/PrimeNumber";
import QuickSort from "../components/QuickSort";

export const items: { [key: string]: { title: string; component: React.ComponentType } } = {
	fibonacci: {
		title: "Fibonacci",
		component: Fibonacci,
	},
	factorial: {
		title: "Factorial",
		component: Factorial,
	},
	primeNumber: {
		title: "Prime Number",
		component: PrimeNumber,
	},
	powerOfTwo: {
		title: "Power of Two",
		component: PowerOfTwo
	},
	linearSearch: {
		title: "Linear Search",
		component: LinearSearch
	},
	binarySearch: {
		title: "Binary Search",
		component: BinarySearch
	},
	bubbleSort: {
		title: "Bubble Sort",
		component: BubbleSort
	},
	insertionSort: {
		title: "Insertion Sort",
		component: InsertionSort
	},
	quickSort: {
		title: "Quick Sort",
		component: QuickSort
	},
	mergeSort: {
		title: "Merge Sort",
		component: MergeSort
	}
};
