import { parseArgs } from "./main.ts";

const testString = `!ban --fakeUser nin0`;

console.log(
	parseArgs(testString, {
		positionalArgumentName: "user",
		prefix: "!"
	})
);
