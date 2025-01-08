import Factorial from "../components/Factorial";
import Fibonacci from "../components/Fibonacci";
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
	prime_number: {
		title: "Prime Number",
		component: PrimeNumber,
	},
};
