const OrderModel = require("../../Models/Order/orderSchema");

const getOrders = async (req, res) => {
    try {

        const { email } = req.params;

        const orders = await OrderModel.find({ email }).sort({ createdAt: -1 });
        if (!orders) {
            res.status(404).json({ message: "No orders found" });
        }

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
module.exports = getOrders;