import paymentValidation from "./helpers/payment-validation.js";
import payment from "./helpers/payment.js";

const routes = (express) => {
  const router = express.Router();

  router.get("/check", (req, res) => {
    res.status(200).send({
      success: true,
      message: "Payment api is working!",
    });
  });

  router.post("/payment", async (req, res) => {
    try {
      const paymentResponse = await payment(req.body);
      res.status(200).send(paymentResponse);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  });

  router.post("/payment/validate", async (req, res) => {
    try {
      const body = req.body;
      const validation = await paymentValidation(body);
      res.status(200).send(validation);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  });

  return router;
};

export default routes;
