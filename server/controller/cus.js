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
  const customers = await Customer.find({});

  res.json({ success: true, customers });
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

export const deleteCus = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);

    if (!customer)
      return res.json({ success: false, message: "Customer doesn't exist." });
  } catch (error) {
    console.log(error);
  }
};
