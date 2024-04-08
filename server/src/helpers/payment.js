import Razorpay from "razorpay";

const payment = async (body) => {

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  const order = await razorpay.orders.create(body);

  if (!order) {
    return { success: false, message: "Something went wrong on orders !" };
  }

  return { success: true, message: "Order created successfully !", order };
};

export default payment;
