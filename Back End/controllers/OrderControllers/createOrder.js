const OrderModel = require("../../Models/Order/orderSchema");

const createOrder = async (req, res) => {
    try {
        const newOrder = await OrderModel.create(req.body);
        res.status(200).json({
            success: true,
            message: "Order Created Successfully",
            data: newOrder
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = createOrder;
