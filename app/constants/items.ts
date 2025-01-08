import Factorial from "../components/Factorial";
import Fibonacci from "../components/Fibonacci";
import PowerOfTwo from "../components/PowerOfTwo";
import PrimeNumber from "../components/PrimeNumber";

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
	}
};
