import Customer from "../models/customer.js";

export const addCus = async (req, res) => {
  try {
    const {
      cusId,
      idNumber,
      cusProfile,
      cusName,
      cusEmail,
      cusGender,
      cusCountry,
      cusRoom,
      cusCheckIn,
      cusPayAmount,
    } = req.body;

    await Customer.create({
      cusId,
      idNumber,
      cusProfile,
      cusName,
      cusEmail,
      cusGender,
      cusCountry,
      cusRoom,
      cusCheckIn,
      cusPayAmount,
    });

    res.json({ success: true, message: "Customer added successfully." });
  } catch (error) {
    console.log(error);
  }
};

export const getCus = async (req, res) => {
  try {
    const customers = await Customer.find({}).sort({ createdAt: -1 });

    res.json({ success: true, customers });
  } catch (error) {
    console.error("Error fetching all customers:", error);
  }
};

export const searchCus = async (req, res) => {
  try {
    const { query } = req.params;
    const customer = await Customer.find({
      $or: [
        { cusName: { $regex: query, $options: "i" } },
        { cusEmail: { $regex: query, $options: "i" } },
      ],
    });

    if (!customer)
      return res.json({ success: false, message: "Customer doesn't exist." });

    res.json({ success: true, customer });
  } catch (error) {
    console.log(error);
  }
};

export const getActiveCustomers = async (req, res) => {
  try {
    const activeCustomers = await Customer.find({ isCheckedOut: false });
    res.json({ success: true, activeCustomers });
  } catch (error) {
    console.error("Error fetching active customers:", error);
  }
};

export const checkoutCustomer = async (req, res) => {
  try {
    const { customerId } = req.body;
    console.log(customerId);
    await Customer.findByIdAndUpdate(
      customerId,
      {
        isCheckedOut: true,
        checkOutDate: new Date(),
      },
      { new: true } // Return the updated document
    );
    res.json({ success: true, message: "Customer checked out successfully." });
  } catch (error) {
    console.error("Error during checkout:", error);
  }
};
