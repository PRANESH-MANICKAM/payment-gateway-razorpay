import { useState } from "react";
import "./index.css";
import {
  Row,
  Col,
  Typography,
  Card,
  Input,
  Space,
  Button,
  message,
} from "antd";
import { handlePayment } from "../shared/helper/methods";

const { Title } = Typography;
const { Meta } = Card;

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [messageApi, contextApi] = message.useMessage();

  const handleAmount = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  return (
    <div className="paymentContainer">
      <Row className="paymentBox">
        <Col span={14}>
          <div className="header">
            <Title level={2} className="headerName">
              PRANESH MANICKAM
            </Title>
          </div>
          <div className="content">
            <Title className="contentTitle">Online Payments Made Easy</Title>
            <Typography className="contentText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography className="contentText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography className="contentText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
        </Col>
        <Col span={10} className="paymentArea">
          <Card
            cover={
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                alt="payment image"
                src="https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            }
            className="paymentCard"
          >
            <Meta
              title="Make Payment !"
              description="You can make this payment through any UPI app with Razorpay. Payment should be more than 100 Rs."
            />
            <Space direction="horizontal" style={{ marginTop: "25px" }}>
              <Input
                placeholder="Enter the amount to pay..."
                size="large"
                variant="filled"
                style={{ width: "280px" }}
                onChange={handleAmount}
              />
              <Button
                type="primary"
                size="large"
                onClick={(e) => handlePayment(e, amount, messageApi)}
              >
                Pay
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
      {contextApi}
    </div>
  );
};

export default Payment;
