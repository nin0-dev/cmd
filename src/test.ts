import { parseArgs } from "./main.ts";

const testString = `!ban @nin0.dev --reason "annoying" -p`;

console.log(
	parseArgs(testString, {
		positionalArgumentName: "user",
		prefix: "!"
	})
);
