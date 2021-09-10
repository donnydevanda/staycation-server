const router = require("express").Router();

const activityController = require("../controllers/activityController");
const adminController = require("../controllers/adminController");
const bankController = require("../controllers/bankController");
const bookingController = require("../controllers/bookingController");
const categoryController = require("../controllers/categoryController");
const featureController = require("../controllers/featureController");
const itemController = require("../controllers/itemController");

const { uploadSingle, uploadMultiple } = require("../middlewares/multer");
const auth = require("../middlewares/auth");

// Activity
router.post("/item/add/activity", uploadSingle, activityController.addActivity);
router.put(
  "/item/update/activity",
  uploadSingle,
  activityController.editActivity
);
router.delete("/item/:itemId/activity/:id", activityController.deleteActivity);

// Admin
router.get("/signin", adminController.viewSignin);
router.post("/signin", adminController.actionSignin);
router.use(auth);
router.get("/logout", adminController.actionLogout);
router.get("/dashboard", adminController.viewDashboard);

// Bank
router.get("/bank", bankController.viewBank);
router.post("/bank", uploadSingle, bankController.addBank);
router.put("/bank", uploadSingle, bankController.editBank);
router.delete("/bank/:id", bankController.deleteBank);

// Booking
router.get("/booking", bookingController.viewBooking);
router.get("/booking/:id", bookingController.showDetailBooking);
router.put("/booking/:id/confirmation", bookingController.actionConfirmation);
router.put("/booking/:id/reject", bookingController.actionReject);

// Category
router.get("/category", categoryController.viewCategory);
router.post("/category", categoryController.addCategory);
router.put("/category", categoryController.editCategory);
router.delete("/category/:id", categoryController.deleteCategory);

// Feature
router.post("/item/add/feature", uploadSingle, featureController.addFeature);
router.put("/item/update/feature", uploadSingle, featureController.editFeature);
router.delete("/item/:itemId/feature/:id", featureController.deleteFeature);

// Item
router.get("/item", itemController.viewItem);
router.post("/item", uploadMultiple, itemController.addItem);
router.get("/item/show-image/:id", itemController.showImageItem);
router.get("/item/:id", itemController.showEditItem);
router.put("/item/:id", uploadMultiple, itemController.editItem);
router.delete("/item/:id/delete", itemController.deleteItem);
router.get("/item/show-detail-item/:itemId", itemController.viewDetailItem);

module.exports = router;
