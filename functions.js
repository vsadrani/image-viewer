var fs = require('fs');
module.exports = {
	// get all the images
	getimages: async function (startIndex, count) {
		var data = fs.readFileSync('./image.txt', 'utf8');
		data = data.toString();
		var arr = data.split('\r\n');
		var resparray = {};
		var currdimension = '';
		resparray.images = [];
		resparray.dimensions = [];

		// get the dimensions array for showing in the filter and send to client
		arr.map((ele) => {
			var width = ele.split('/');
			if (
				width[width.length - 2] + '/' + width[width.length - 1] !=
				currdimension
			) {
				currdimension = width[width.length - 2] + '/' + width[width.length - 1];
				resparray.dimensions.push(
					width[width.length - 2] + '/' + width[width.length - 1]
				);
			}
		});

		// get paginated data based on the count set by client
		arr.slice([startIndex], [startIndex + count]).map((ele) => {
			var width = ele.split('/');
			var height = width[width.length - 1];
			width = width[width.length - 2];
			resparray.images.push({
				src: ele,
				width: width,
				height: height,
			});
		});

		// if more images are available set the attribute to true and send to client side.
		if (arr.length > startIndex + count) {
			resparray.HasNext = true;
		} else {
			resparray.HasNext = false;
		}
		console.log(resparray);
		return resparray;
	},
	dimensioncheck: async function (dimension) {
		console.log('dimension' + dimension);
		var data = fs.readFileSync('./image.txt', 'utf8');
		data = data.toString();
		var arr = data.split('\r\n');
		var dime = [];
		arr.map((ele) => {
			if (ele.includes(dimension)) {
				dime.push(ele);
			}
		});
		return dime;
	},
};
