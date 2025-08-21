type Args = {
	[name: string]: string | true;
};

export function parseArgs(
	command: string,
	options: {
		positionalArgumentName?: string;
		prefix: string;
	}
): {
	name: string;
	args?: Args;
} {
	const initialRegex = new RegExp(
		`^${options.prefix}([\-_a-zA-Z0-9]{1,32})(?: (.+))?$`
	);
	const argRegex =
		/(?:--([a-zA-Z0-9\-_]+)(?:(?:=| )(?:((?!-)[^ \"'\n]+)|["'](.*?)["']))?|-([a-zA-Z0-9\-_])(?: (?:((?!-)[^ \"'\n]+)|["'](.*?)["']))?)/g;

	const [_fullCmd, commandName, argsString] = command.match(initialRegex)!;

	const args: Args = {};
	if (argsString) {
		const argsMatch = argsString.matchAll(argRegex);
		let workingArgsString = argsString;
		for (const arg of argsMatch) {
			workingArgsString = workingArgsString.replace(arg[0], "");
			const foundValues = [];
			for (const lookAt of [1, 2, 3, 4, 5, 6]) {
				if (arg[lookAt]) foundValues.push(arg[lookAt]);
				if (foundValues.length === 2) break;
			}

			Object.assign(
				args,
				Object.fromEntries([
					[
						foundValues[0],
						foundValues.length === 1 ? true : foundValues[1]
					]
				])
			);
		}
		options.positionalArgumentName &&
			workingArgsString.trim() &&
			Object.assign(
				args,
				Object.fromEntries([
					[options.positionalArgumentName, workingArgsString.trim()]
				])
			);
	}

	return { name: commandName, args };
}
