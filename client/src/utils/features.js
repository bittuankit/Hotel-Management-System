import toast from "react-hot-toast";
import moment from "moment";

export const responseToast = (res, navigate, url) => {
  if ("data" in res) {
    toast.success(res.data.message);
    if (navigate) navigate(url);
  } else {
    toast.error(res);
  }
};

export const lastSixMonths = () => {
  const currDate = moment();
  currDate.date(1);

  const lastSixMonths = [];

  for (let i = 0; i < 6; i++) {
    const monthDate = currDate.clone().subtract(i, "months");
    const monthName = monthDate.format("MMMM");
    lastSixMonths.unshift(monthName);
  }

  return { lastSixMonths };
};
