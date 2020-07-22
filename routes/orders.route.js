const router = require('express').Router();
const Order = require('../models/order.model');

//Orderpage
router.get('/', async (req, res) => {
	try {
		res.send();
		// res.render('order/index');
	} catch (err) {
		console.log(err);
	}
});
