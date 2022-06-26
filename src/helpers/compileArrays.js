/**
 * Takes an object of keyed arrays and joins them into a string.
 *
 * @param {object} input The object to be compiled.
 * @param {object} options All options.
 * @param {string} options.groupSeparator The string used to separate the values within a group.
 * @param {string} options.separator The string used to separate groups of values.
 * @returns {string} The compiled string.
 */
export function compileArrays(input, options = {}) {
	const {
		groupSeparator = ',',
		separator = ';',
	} = options
	const result = []

	const keys = Object.keys(input)
	const valueArrays = Object.values(input)
	const indeces = Array(keys.length).fill(0)

	const TOTAL_COMBINATIONS = valueArrays
		.map(values => values.length)
		.reduce((accumulator, length) => (accumulator * length))

	let combinationIndex = 0
	while (combinationIndex < TOTAL_COMBINATIONS) {
		// Generate the current combination
		const combination = keys
			.map((_, index) => {
				const values = valueArrays[index]
				const valueIndex = indeces[index]
				const value = values[valueIndex]

				return value
			})

		// Push the combination into the results array
		result.push(combination.join(groupSeparator))

		// Update indeces
		let indecesIndex = indeces.length - 1
		while (indecesIndex >= 0) {
			const values = valueArrays[indecesIndex]
			const indexIndex = indeces[indecesIndex] + 1

			if (indexIndex === values.length) {
				indeces[indecesIndex] = 0
			} else {
				indeces[indecesIndex] = indexIndex
				// Break to avoid incrementing parent indeces
				break
			}

			indecesIndex -= 1
		}

		combinationIndex += 1
	}

	return result.join(separator)
}
