import user from "../packages/stubs/user";
import state from "../packages/stubs/state";
import product from "../packages/stubs/product";
import customer from "../packages/stubs/customer";
import bill from "../packages/stubs/bill";

export default {
  snackbar: {},
  user: user,
  bills: bill,
  chalans: [],

  // customers
  gettingCustomers: false,
  customers: customer,

  // products
  products: product,
  gettingProducts: false,

  // states
  states: state,
  gettingStates: false
};
