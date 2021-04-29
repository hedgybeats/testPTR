const userController = require("../src/dataLayer/controllers/user.controller.js");
const businessController = require("../src/dataLayer/controllers/business.controller.js");
const customerController = require("../src/dataLayer/controllers/customer.controller.js");
const invoiceController = require("../src/dataLayer/controllers/invoice.controller.js");
const productController = require("../src/dataLayer/controllers/product.controller.js");
const productTypeController = require("../src/dataLayer/controllers/productType.controller.js");
const quotationController = require("../src/dataLayer/controllers/quotation.controller.js");
const statementController = require("../src/dataLayer/controllers/statement.controller.js");
// for some reason only the above import work with '../src/'
//#region ---- USER ----

const dbGetUsers = async () => {
  return await userController.FindAll();
};

const dbGetUser = async (id) => {
  return await userController.FindOne(id);
};

const dbGetUserByUsername = async (username) => {
  return await userController.FindByUsername(username);
};

const dbAddUser = async (user) => {
  return await userController.CreateUser(user);
};

const dbAddAdminUser = async (user) => {
  return await userController.CreateAdminUser(user);
};

const dbUpdateUser = async (user) => {
  return await userController.Update(user);
};

const dbDeleteUser = async (id) => {
  return await userController.Delete(id);
};

//#endregion
//#region ---- BUSINESS ----

const dbGetBusinesses = async () => {
  return await businessController.FindAll();
};

const dbGetBusiness = async (id) => {
  return await businessController.FindOne(id);
};

const dbGetBusinessessByUserId = async (id) => {
  return await businessController.FindByUserId(id);
};

const dbAddBusiness = async (business) => {
  return await businessController.Create(business);
};

const dbUpdateBusiness = async (business) => {
  return await businessController.Update(business);
};

const dbDeleteBusiness = async (id) => {
  return await businessController.Delete(id);
};

//#endregion
//#region ---- CUSTOMER ----

const dbGetCustomers = async () => {
  return await customerController.FindAll();
};

const dbGetCustomer = async (id) => {
  return await customerController.FindOne(id);
};

const dbAddCustomer = async (customer) => {
  return await customerController.Create(customer);
};

const dbUpdateCustomer = async (customer) => {
  return await customerController.Update(customer);
};

const dbDeleteCustomer = async (id) => {
  return await customerController.Delete(id);
};

//#endregion
//#region ---- INVOICE ----

const dbGetInvoices = async () => {
  return await invoiceController.FindAll();
};

const dbGetInvoice = async (id) => {
  return await invoiceController.FindOne(id);
};

const dbGetInvoiceByInvoiceNumber = async (invoiceNumber) => {
  return await invoiceController.FindByInvoiceNumber(invoiceNumber);
};

const dbAddInvoice = async (invoice) => {
  return await invoiceController.Create(invoice);
};

const dbUpdateInvoice = async (invoice) => {
  return await invoiceController.Update(invoice);
};

const dbDeleteInvoice = async (id) => {
  return await customerController.Delete(id);
};
//#endregion
//#region ---- PRODUCT ----

const dbGetProducts = async () => {
  return await productController.FindAll();
};

const dbGetProduct = async (id) => {
  return await productController.FindOne(id);
};

const dbAddProduct = async (product) => {
  return await productController.Create(product);
};

const dbUpdateProduct = async (product) => {
  return await productController.Update(product);
};

const dbDeleteProduct = async (id) => {
  return await productController.Delete(id);
};

//#endregion
//#region ---- PRODUCT TYPE ----
const dbGetProductTypes = async () => {
  return await productTypeController.FindAll();
};

const dbGetProductType = async (id) => {
  return await productTypeController.FindOne(id);
};

const dbAddProductType = async (productType) => {
  return await productTypeController.Create(productType);
};

const dbUpdateProductType = async (productType) => {
  return await productTypeController.Update(productType);
};

const dbDeleteProductType = async (id) => {
  return await productTypeController.Delete(id);
};
//#endregion
//#region ---- QUOTATION ----
const dbGetQuotations = async () => {
  return await quotationController.FindAll();
};

const dbGetQuotation = async (id) => {
  return await quotationController.FindOne(id);
};

const dbAddQuotation = async (quotation) => {
  return await quotationController.Create(quotation);
};

const dbUpdateQuotation = async (quotation) => {
  return await quotationController.Update(quotation);
};

const dbDeleteQuotation = async (id) => {
  return await quotationController.Delete(id);
};

//#endregion
//#region ---- STATEMENT ----
const dbGetStataments = async () => {
  return await statementController.FindAll();
};

const dbGetStatement = async (id) => {
  return await statementController.FindOne(id);
};

const dbAddStatement = async (statement) => {
  return await statementController.Create(statement);
};

const dbUpdateStatement = async (statement) => {
  return await statementController.Update(statement);
};

const dbDeleteStatement = async (id) => {
  return await statementController.Delete(id);
};
//#endregion

;
//# sourceMappingURL=scripts.js.map