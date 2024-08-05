function formatPhoneNumber(arr) {
	const areaCode = `(${arr[0]}${arr[1]}${arr[2]})`

	const start = `${arr[3]}${arr[4]}${arr[5]}`

	const finish = `${arr[6]}${arr[7]}${arr[8]}${arr[9]}`

	const fullNumber = `${areaCode} ${start}-${finish}`

	return fullNumber
}

module.exports = formatPhoneNumber
