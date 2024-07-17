function arrayIntersection(arr1, arr2) {
	let intersectArr = []

	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i]) && !intersectArr.includes(arr1[i])) {
			intersectArr.push(arr1[i])
		}
	}

	return intersectArr
}

module.exports = arrayIntersection
