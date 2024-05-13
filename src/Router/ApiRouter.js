const {
  createDimension,
  getAllDimensions,
  getDimensionById,
  updateDimensionById,
  deleteDimensionById,
  createManufacturer,
  getAllManufacturers,
  getManufacturerById,
  updateManufacturerById,
  deleteManufacturerById,
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
  createLoginAccess,
  getAllLoginAccesses,
  getLoginAccessById,
  updateLoginAccessById,
  deleteLoginAccessById,
  createAddress,
  getAllAddresses,
  getAddressById,
  updateAddressById,
  deleteAddressById,
  createCatlog,
  getAllCatlogs,
  getCatlogById,
  updateCatlogById,
  deleteCatlogById,
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePaymentById,
  deletePaymentById,
  createCart,
  getAllCarts,
  getCartById,
  updateCartById,
  deleteCartById,
  createCheckout,
  getAllCheckouts,
  getCheckoutById,
  updateCheckoutById,
  deleteCheckoutById,
  createShipping,
  getAllShippings,
  getShippingById,
  updateShippingById,
  deleteShippingById,
} = require("../Controller/ApiControllers");
const router = require("express").Router();

router.post("/dimension", createDimension);
router.get("/dimensions", getAllDimensions);
router.get("/dimension/:id", getDimensionById);
router.put("/dimension/:id", updateDimensionById);
router.delete("/dimension/:id", deleteDimensionById);

router.post("/manufacturer", createManufacturer);
router.get("/manufacturers", getAllManufacturers);
router.get("/manufacturer/:id", getManufacturerById);
router.put("/manufacturer/:id", updateManufacturerById);
router.delete("/manufacturer/:id", deleteManufacturerById);

router.post("/category", createCategory);
router.get("/categories", getAllCategories);
router.get("/category/:id", getCategoryById);
router.put("/category/:id", updateCategoryById);
router.delete("/category/:id", deleteCategoryById);

router.post("/customer", createCustomer);
router.get("/customers", getAllCustomers);
router.get("/customer/:id", getCustomerById);
router.put("/customer/:id", updateCustomerById);
router.delete("/customer/:id", deleteCustomerById);

router.post("/login-access", createLoginAccess);
router.get("/login-accesses", getAllLoginAccesses);
router.get("/login-access/:id", getLoginAccessById);
router.put("/login-access/:id", updateLoginAccessById);
router.delete("/login-access/:id", deleteLoginAccessById);

router.post("/address", createAddress);
router.get("/addresses", getAllAddresses);
router.get("/address/:id", getAddressById);
router.put("/address/:id", updateAddressById);
router.delete("/address/:id", deleteAddressById);

router.post("/catlog", createCatlog);
router.get("/catlogs", getAllCatlogs);
router.get("/catlog/:id", getCatlogById);
router.put("/catlog/:id", updateCatlogById);
router.delete("/catlog/:id", deleteCatlogById);

router.post("/payment", createPayment);
router.get("/payments", getAllPayments);
router.get("/payment/:id", getPaymentById);
router.put("/payment/:id", updatePaymentById);
router.delete("/payment/:id", deletePaymentById);

router.post("/cart", createCart);
router.get("/carts", getAllCarts);
router.get("/cart/:id", getCartById);
router.put("/cart/:id", updateCartById);
router.delete("/cart/:id", deleteCartById);

router.post("/checkout", createCheckout);
router.get("/checkouts", getAllCheckouts);
router.get("/checkout/:id", getCheckoutById);
router.put("/checkout/:id", updateCheckoutById);
router.delete("/checkout/:id", deleteCheckoutById);

router.post("/shipping", createShipping);
router.get("/shippings", getAllShippings);
router.get("/shipping/:id", getShippingById);
router.put("/shipping/:id", updateShippingById);
router.delete("/shipping/:id", deleteShippingById);

module.exports = router;
