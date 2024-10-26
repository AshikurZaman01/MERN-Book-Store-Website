const BookModel = require("../../Models/BookModel/BookSchema")

const getAllBooks = async (req, res) => {
    try {

        const books = await BookModel.find().sort({ createdAt: -1 });   //sort by date in descending order
        res.status(200).send({ success: true, message: "Books fetched successfully", data: books })

    } catch (error) {

        res.status(500).send({ success: false, message: "Internal server error", error: error.message })
    }
}
module.exports = getAllBooks