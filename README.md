# SEI23 Project 2

## Ecommerce

App is hosted here: https://sei23sgproject2.herokuapp.com/items

## Project 2 Objectives
Create an ecommerce app which allows users to view items on main page, add to a cart and checkout the cart. Upon checkout the items from the cart should be moved to the orders summary page


## How does the app work:
passport is used to hash the user's password upon account creation and this hashed password would then be compared to the user input password.
When both username and password corresponds to that in the database, the user can then access the carts and orders page.
checkUser which is defined in the loginBlocker.js is used to check the user is logged in before proceeding into the carts and orders routes.
A user, item, cart and order model are created for this to work.
The user model has a reference to the cart, and both cart and order is referrenced to the item and user and item.
EJS files are used to display the pages along with some bootstrap styling

## Further:
1) upon adding on existing item to cart -> it should update the qty instead of adding the same item on a separate line
2) compute total price in cart
3) use react for frontend
4) add icon, some colours to make page look nicer
5) give distinct roles between seller and buyer, seller can only add items to the list(and not go to the checkout page).
buyer cannot add items to the list (but can go to the checkout page)
