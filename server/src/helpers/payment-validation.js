import crypto from "crypto";

const paymentValidation = async (body) => {
  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  sha.update(`${body.razorpay_order_id}|${body.razorpay_payment_id}`);
  const digest = sha.digest();
  if (digest !== body.razorpay_signature) {
    return {
      success: false,
      message: "Payment validation fails !",
    };
  }
  return {
    success: true,
    messgae: "Payment validated successfully !",
  };
};

export default paymentValidation;
