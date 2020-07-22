const router = require('express').Router();
const Cart = require('../models/cart.model');

/* get all items from cart from current user */
router.get('/', async (req, res) => {
	try {
		//compares to check that all the items that is created by this user
		let items = await Cart.findOne({ createdBy: req.user._id }).populate('items.item');
		console.log(items);
		res.render('cart/index', { items: items.items });
	} catch (error) {
		console.log(error);
	}
});

router.post('/:id/add', async (req, res) => {
	console.log(req.user);
	/* 
    
    */
	try {
		/* 
       check if the cart has a createdBy same as the login user
        */
		let checkedCart = await Cart.exists({
			createdBy : req.user._id
		});
		console.log(checkedCart);
		/* 
        check if the user already has an existing cart
        */
		if (checkedCart) {
			/* 
        looks into the collection for the cart with the user id
        */
			let cart = await Cart.findOne({
				createdBy : req.user._id
			});
			/* 
        Push the new item into the existing cart
        */
			cart.items.push({
				item     : req.params.id,
				quantity : 1
			});
			/* 
        Save changes to existing cart
        */
			let savedCart = await cart.save();
			if (savedCart) {
				res.redirect('/');
			}
		} else {
			/* 
        create a new cart
        */
			let thing = {
				items     : [
					{
						item     : req.params.id,
						quantity : 1
					}
				],
				createdBy : req.user._id
			};
			let cart = new Cart(thing);
			let savedCart = await cart.save();
			if (savedCart) {
				res.redirect('/');
			}
		}
	} catch (error) {
		console.log(error);
	}
});
module.exports = router;
