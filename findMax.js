function findMaxAndSecondMax(arr) {
	let max1, max2;

	if (arr[0] > arr[1]) {
		max1 = arr[0];
		max2 = arr[1];
	} else {
		max1 = arr[1];
		max2 = arr[0];
	}

	for (let i = 2; i < arr.length; i++) {
		let num = arr[i];
		if (num > max1) {
			max2 = max1;
			max1 = num;
		} else if (num > max2 && num != max1) {
			max2 = num;
		}
	}

	return { max1, max2 };
}
let arr = [5, 1, 8, 3, 8, 2];
console.log(findMaxAndSecondMax(arr));