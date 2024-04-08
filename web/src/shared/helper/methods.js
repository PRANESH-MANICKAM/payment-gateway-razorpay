export const handlePayment = async (e, amount, message) => {
  try {
    if (amount < 100) {
      message.open({
        type: "warning",
        content: "Amount Should be more than 100rs.",
      });
      return null;
    }
    const payment = await fetch(
      `${process.env.REACT_APP_SERVICE_URL}/payment`,
      {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          currency: "INR",
          receipt: "qsawq1",
        }),
      }
    );
    const orderJson = await payment.json();
    message.open({
      type: "success",
      content: orderJson.message,
    });
    const options = {
      key: `${process.env.REACT_APP_RAZORPAY_KET_ID}`,
      amount: amount * 100,
      currency: "INR",
      name: "PRANESH MANICKAM",
      description: `You have to done a payment ${amount}`,
      image: "",
      order_id: `${orderJson.order.id}`,
      handler: async (response) => {
        const body = { ...response };
        const checkResponse = await fetch(
          `${process.env.REACT_APP_SERVICE_URL}/payment/validate`,
          {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        await checkResponse.json();
        message.open({
          type: "success",
          message: "Payment Verified.",
        });
        window.location.reload();
      },
      prefill: {
        name: "Pranesh",
        email: "praneshappu2001@gmail.com",
        contact: "8838416934",
      },
      notes: {
        address: "Pranesh Manickam",
      },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
    e.preventDefault();
  } catch (error) {
    message.open({
      type: "error",
      content: "Something went wrong in orders",
    });
  }
};
