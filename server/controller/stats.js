import {
  calculateGrossProfitPercentage,
  calculatePercentage,
} from "../utils/features.js";
import Customer from "../models/customer.js";
import { Emp } from "../models/emp.js";

export const getDashboardStats = async (req, res) => {
  let stats = [];
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const thisMonth = {
    start: new Date(today.getFullYear(), today.getMonth(), 1),
    end: today,
  };
  const lastMonth = {
    start: new Date(today.getFullYear(), today.getMonth() - 1, 1),
    end: new Date(today.getFullYear(), today.getMonth(), 0),
  };

  const thisMonthCustomerPromise = Customer.find({
    createdAt: {
      $gte: thisMonth.start,
      $lte: thisMonth.end,
    },
  });

  const lastMonthCustomerPromise = Customer.find({
    createdAt: {
      $gte: lastMonth.start,
      $lte: lastMonth.end,
    },
  });

  const thisMonthEmployeePromise = Emp.find({
    createdAt: {
      $gte: thisMonth.start,
      $lte: thisMonth.end,
    },
  });

  const lastMonthEmployeePromise = Emp.find({
    createdAt: {
      $gte: lastMonth.start,
      $lte: lastMonth.end,
    },
  });

  const lastSixMonthCustomerPromise = Customer.find({
    createdAt: {
      $gte: sixMonthsAgo,
      $lte: today,
    },
  });

  const [
    thisMonthCustomer,
    thisMonthEmployee,
    lastMonthCustomer,
    lastMonthEmployee,
    customerCount,
    employeeCount,
    allCustomerAmount,
    lastSixMonthCustomer,
    femaleCount,
    allEmployeeAmount,
  ] = await Promise.all([
    thisMonthCustomerPromise,
    thisMonthEmployeePromise,
    lastMonthCustomerPromise,
    lastMonthEmployeePromise,
    Customer.countDocuments(),
    Emp.countDocuments(),
    Customer.find({}).select("cusPayAmount"),
    lastSixMonthCustomerPromise,
    Customer.countDocuments({ cusGender: "female" }),
    Emp.find({}).select("amount"),
  ]);

  const thisMonthRevenue = thisMonthCustomer.reduce(
    (total, amount) => total + (amount.cusPayAmount || 0),
    0
  );

  const lastMonthRevenue = lastMonthCustomer.reduce(
    (total, amount) => total + (amount.cusPayAmount || 0),
    0
  );

  const revenue = allCustomerAmount.reduce(
    (total, amount) => total + (amount.cusPayAmount || 0),
    0
  );

  const expenditure = allEmployeeAmount.reduce(
    (total, amount) => total + (amount.amount || 0),
    0
  );

  const percentage = {
    revenue: calculatePercentage(thisMonthRevenue, lastMonthRevenue),
    expenditure: calculateGrossProfitPercentage(revenue, expenditure),
    customerPercentage: calculatePercentage(
      thisMonthCustomer.length,
      lastMonthCustomer.length
    ),
    employeePercentage: calculatePercentage(
      thisMonthEmployee.length,
      lastMonthEmployee.length
    ),
  };

  const customerMonthCount = new Array(6).fill(0);
  const revenueMonthCount = new Array(6).fill(0);

  lastSixMonthCustomer.forEach((customer) => {
    const checkInDate = customer.createdAt;
    const monthDiff = today.getMonth() - checkInDate.getMonth();

    if (monthDiff < 6) {
      customerMonthCount[6 - monthDiff - 1] += 1;
      revenueMonthCount[6 - monthDiff - 1] += customer.cusPayAmount;
    }
  });

  const customerRatio = {
    male: customerCount - femaleCount,
    female: femaleCount,
  };

  stats = {
    percentage,
    revenue,
    customerCount,
    expenditure: expenditure > revenue ? -1 * expenditure : expenditure,
    employeeCount,
    transactions: allCustomerAmount.length,
    charts: { customers: customerMonthCount, revenue: revenueMonthCount },
    customerRatio,
  };

  return res.json({
    success: true,
    stats,
  });
};
