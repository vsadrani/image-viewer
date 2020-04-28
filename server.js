var express = require('express');
var cors = require('cors');
(bodyParser = require('body-parser')), (app = express());
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}/`);
});
app.use(
	bodyParser.json({
		verify: function getRawBody(req, res, buf) {
			req.rawBody = buf.toString();
			res.header('Access-Control-Allow-Origin', '*');
		},
	})
);
app.use(cors());
var func = require('./functions.js');
app.post('/photos', (req, res) => {
	if (req.body.dimension != undefined) {
		func.dimensioncheck(req.body.dimension).then((getresponse) => {
			console.log('RETURNED');
			console.log(getresponse);
			res.json(getresponse);
		});
	} else {
		func.getimages(req.body.startindex, req.body.count).then((getresponse) => {
			res.json(getresponse);
		});
	}
});
