const CartModel = require("../model/CartModel");
const CheckoutModel = require("../model/CheckoutModel");
const ShippingModel = require("../model/ShippingModel");
const PaymentModel = require("../model/PaymentModel");
const CatlogModel = require("../model/CatlogModel");
const CustomerModel = require("../model/CustomerModel");
const LoginAccessModel = require("../model/LoginAccessModel");
const {
  AddressModel,
  ManufacturerModel,
  CategoryModel,
  DimensionModel,
} = require("../model/OtherModels");

// Create a new dimension
const createDimension = async (req, res) => {
  try {
    const dimension = await DimensionModel.create(req.body);
    res.status(201).json(dimension);
  } catch (error) {
    res.status(500).json({ error: "Failed to create dimension" });
  }
};

// Get all dimensions
const getAllDimensions = async (req, res) => {
  try {
    const dimensions = await DimensionModel.find();
    res.json(dimensions);
  } catch (error) {
    res.status(500).json({ error: "Failed to get dimensions" });
  }
};

// Get a single dimension by ID
const getDimensionById = async (req, res) => {
  try {
    const dimension = await DimensionModel.findById(req.params.id);
    if (!dimension) {
      res.status(404).json({ error: "Dimension not found" });
    } else {
      res.json(dimension);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get dimension" });
  }
};

// Update a dimension by ID
const updateDimensionById = async (req, res) => {
  try {
    const dimension = await DimensionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!dimension) {
      res.status(404).json({ error: "Dimension not found" });
    } else {
      res.json(dimension);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update dimension" });
  }
};

// Delete a dimension by ID
const deleteDimensionById = async (req, res) => {
  try {
    const dimension = await DimensionModel.findByIdAndDelete(req.params.id);
    if (!dimension) {
      res.status(404).json({ error: "Dimension not found" });
    } else {
      res.json({ message: "Dimension deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete dimension" });
  }
};

// Create a new manufacturer
const createManufacturer = async (req, res) => {
  try {
    const manufacturer = await ManufacturerModel.create(req.body);
    res.status(201).json(manufacturer);
  } catch (error) {
    res.status(500).json({ error: "Failed to create manufacturer" });
  }
};

// Get all manufacturers
const getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await ManufacturerModel.find();
    res.json(manufacturers);
  } catch (error) {
    res.status(500).json({ error: "Failed to get manufacturers" });
  }
};

// Get a single manufacturer by ID
const getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await ManufacturerModel.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }
    res.json(manufacturer);
  } catch (error) {
    res.status(500).json({ error: "Failed to get manufacturer" });
  }
};

// Update a manufacturer by ID
const updateManufacturerById = async (req, res) => {
  try {
    const manufacturer = await ManufacturerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!manufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }
    res.json(manufacturer);
  } catch (error) {
    res.status(500).json({ error: "Failed to update manufacturer" });
  }
};

// Delete a manufacturer by ID
const deleteManufacturerById = async (req, res) => {
  try {
    const manufacturer = await ManufacturerModel.findByIdAndDelete(
      req.params.id
    );
    if (!manufacturer) {
      return res.status(404).json({ error: "Manufacturer not found" });
    }
    res.json({ message: "Manufacturer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete manufacturer" });
  }
};

// Create a new category
const createCategory = async (req, res) => {
  try {
    const category = await CategoryModel.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to create category" });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to get categories" });
  }
};

// Get a single category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to get category" });
  }
};

// Update a category by ID
const updateCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to update category" });
  }
};

// Delete a category by ID
const deleteCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category" });
  }
};

// Create a new customer
const createCustomer = async (req, res) => {
  try {
    const customer = await CustomerModel.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: "Failed to create customer" });
  }
};

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to get customers" });
  }
};

// Get a single customer by ID
const getCustomerById = async (req, res) => {
  try {
    const customer = await CustomerModel.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: "Failed to get customer" });
  }
};

// Update a customer by ID
const updateCustomerById = async (req, res) => {
  try {
    const customer = await CustomerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: "Failed to update customer" });
  }
};

// Delete a customer by ID
const deleteCustomerById = async (req, res) => {
  try {
    const customer = await CustomerModel.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete customer" });
  }
};

// Create a new login access
const createLoginAccess = async (req, res) => {
  try {
    const loginAccess = await LoginAccessModel.create(req.body);
    res.status(201).json(loginAccess);
  } catch (error) {
    res.status(500).json({ error: "Failed to create login access" });
  }
};

// Get all login accesses
const getAllLoginAccesses = async (req, res) => {
  try {
    const loginAccesses = await LoginAccessModel.find();
    res.json(loginAccesses);
  } catch (error) {
    res.status(500).json({ error: "Failed to get login accesses" });
  }
};

// Get a single login access by ID
const getLoginAccessById = async (req, res) => {
  try {
    const loginAccess = await LoginAccessModel.findById(req.params.id);
    if (!loginAccess) {
      return res.status(404).json({ error: "Login access not found" });
    }
    res.json(loginAccess);
  } catch (error) {
    res.status(500).json({ error: "Failed to get login access" });
  }
};

// Update a login access by ID
const updateLoginAccessById = async (req, res) => {
  try {
    const loginAccess = await LoginAccessModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!loginAccess) {
      return res.status(404).json({ error: "Login access not found" });
    }
    res.json(loginAccess);
  } catch (error) {
    res.status(500).json({ error: "Failed to update login access" });
  }
};

// Delete a login access by ID
const deleteLoginAccessById = async (req, res) => {
  try {
    const loginAccess = await LoginAccessModel.findByIdAndDelete(req.params.id);
    if (!loginAccess) {
      return res.status(404).json({ error: "Login access not found" });
    }
    res.json({ message: "Login access deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete login access" });
  }
};

// Create a new address
const createAddress = async (req, res) => {
  try {
    const address = await AddressModel.create(req.body);
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ error: "Failed to create address" });
  }
};

// Get all addresses
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await AddressModel.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ error: "Failed to get addresses" });
  }
};

// Get a single address by ID
const getAddressById = async (req, res) => {
  try {
    const address = await AddressModel.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: "Failed to get address" });
  }
};

// Update an address by ID
const updateAddressById = async (req, res) => {
  try {
    const address = await AddressModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }
    res.json(address);
  } catch (error) {
    res.status(500).json({ error: "Failed to update address" });
  }
};

// Delete an address by ID
const deleteAddressById = async (req, res) => {
  try {
    const address = await AddressModel.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).json({ error: "Address not found" });
    }
    res.json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete address" });
  }
};

// Create a new catlog
const createCatlog = async (req, res) => {
  try {
    const catlog = await CatlogModel.create(req.body);
    res.status(201).json(catlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to create catlog" });
  }
};

// Get all catlogs
const getAllCatlogs = async (req, res) => {
  try {
    const catlogs = await CatlogModel.find();
    res.json(catlogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to get catlogs" });
  }
};

// Get a single catlog by ID
const getCatlogById = async (req, res) => {
  try {
    const catlog = await CatlogModel.findById(req.params.id);
    if (!catlog) {
      return res.status(404).json({ error: "Catlog not found" });
    }
    res.json(catlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to get catlog" });
  }
};

// Update a catlog by ID
const updateCatlogById = async (req, res) => {
  try {
    const catlog = await CatlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!catlog) {
      return res.status(404).json({ error: "Catlog not found" });
    }
    res.json(catlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to update catlog" });
  }
};

// Delete a catlog by ID
const deleteCatlogById = async (req, res) => {
  try {
    const catlog = await CatlogModel.findByIdAndDelete(req.params.id);
    if (!catlog) {
      return res.status(404).json({ error: "Catlog not found" });
    }
    res.json({ message: "Catlog deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete catlog" });
  }
};

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const payment = await PaymentModel.create(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create payment" });
  }
};

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await PaymentModel.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: "Failed to get payments" });
  }
};

// Get a single payment by ID
const getPaymentById = async (req, res) => {
  try {
    const payment = await PaymentModel.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: "Failed to get payment" });
  }
};

// Update a payment by ID
const updatePaymentById = async (req, res) => {
  try {
    const payment = await PaymentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: "Failed to update payment" });
  }
};

// Delete a payment by ID
const deletePaymentById = async (req, res) => {
  try {
    const payment = await PaymentModel.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: "Payment not found" });
    }
    res.json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete payment" });
  }
};

// Create a new cart
const createCart = async (req, res) => {
  try {
    const cart = await CartModel.create(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to create cart" });
  }
};

// Get all carts
const getAllCarts = async (req, res) => {
  try {
    const carts = await CartModel.find();
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: "Failed to get carts" });
  }
};

// Get a single cart by ID
const getCartById = async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to get cart" });
  }
};

// Update a cart by ID
const updateCartById = async (req, res) => {
  try {
    const cart = await CartModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to update cart" });
  }
};

// Delete a cart by ID
const deleteCartById = async (req, res) => {
  try {
    const cart = await CartModel.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }
    res.json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete cart" });
  }
};

// Repeat the above CRUD operations for other models (CheckoutModel, ShippingModel, PaymentModel, CatlogModel, CustomerModel, LoginAccessModel, AddressModel, ManufacturerModel, CategoryModel, DimensionModel)

// Create a new checkout
const createCheckout = async (req, res) => {
  try {
    const checkout = await CheckoutModel.create(req.body);
    res.status(201).json(checkout);
  } catch (error) {
    res.status(500).json({ error: "Failed to create checkout" });
  }
};

// Get all checkouts
const getAllCheckouts = async (req, res) => {
  try {
    const checkouts = await CheckoutModel.find();
    res.json(checkouts);
  } catch (error) {
    res.status(500).json({ error: "Failed to get checkouts" });
  }
};

// Get a single checkout by ID
const getCheckoutById = async (req, res) => {
  try {
    const checkout = await CheckoutModel.findById(req.params.id);
    if (!checkout) {
      return res.status(404).json({ error: "Checkout not found" });
    }
    res.json(checkout);
  } catch (error) {
    res.status(500).json({ error: "Failed to get checkout" });
  }
};

// Update a checkout by ID
const updateCheckoutById = async (req, res) => {
  try {
    const checkout = await CheckoutModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!checkout) {
      return res.status(404).json({ error: "Checkout not found" });
    }
    res.json(checkout);
  } catch (error) {
    res.status(500).json({ error: "Failed to update checkout" });
  }
};

// Delete a checkout by ID
const deleteCheckoutById = async (req, res) => {
  try {
    const checkout = await CheckoutModel.findByIdAndDelete(req.params.id);
    if (!checkout) {
      return res.status(404).json({ error: "Checkout not found" });
    }
    res.json({ message: "Checkout deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete checkout" });
  }
};

// Create a new shipping
const createShipping = async (req, res) => {
  try {
    const shipping = await ShippingModel.create(req.body);
    res.status(201).json(shipping);
  } catch (error) {
    res.status(500).json({ error: "Failed to create shipping" });
  }
};

const getAllShippings = async (req, res) => {
  try {
    const shippings = await ShippingModel.find();
    res.json(shippings);
  } catch (error) {
    res.status(500).json({ error: "Failed to get shippings" });
  }
};

const getShippingById = async (req, res) => {
  try {
    const shipping = await ShippingModel.findById(req.params.id);
    if (!shipping) {
      return res.status(404).json({ error: "Shipping not found" });
    }
    res.json(shipping);
  } catch (error) {
    res.status(500).json({ error: "Failed to get shipping" });
  }
};

const updateShippingById = async (req, res) => {
  try {
    const shipping = await ShippingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!shipping) {
      return res.status(404).json({ error: "Shipping not found" });
    }
    res.json(shipping);
  } catch (error) {
    res.status(500).json({ error: "Failed to update shipping" });
  }
};

const deleteShippingById = async (req, res) => {
  try {
    const shipping = await ShippingModel.findByIdAndDelete(req.params.id);
    if (!shipping) {
      return res.status(404).json({ error: "Shipping not found" });
    }
    res.json({ message: "Shipping deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete shipping" });
  }
};

module.exports = {
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
};
