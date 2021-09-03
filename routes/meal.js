const { Router } = require("express");
const mealController = require("../controllers/mealControllers");
const router = Router();
const { auth, isAdmin } = require("../middleware/auth");

router.get("/meals", mealController.get_meals);
router.post("/meals", auth, isAdmin, mealController.post_meal);
router.put("/meals/:id", auth, isAdmin, mealController.update_meal);
router.delete("/meals/:id", auth, isAdmin, mealController.delete_meal);

module.exports = router;
