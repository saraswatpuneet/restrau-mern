const { Router } = require("express");
const cartController = require("../controllers/cartControllers");
const router = Router();

router.get("/cart/:id", cartController.get_cart_meals);
router.post("/cart/:id", cartController.add_cart_meal);
router.delete("/cart/:userId/:mealId", cartController.delete_meal);

module.exports = router;
