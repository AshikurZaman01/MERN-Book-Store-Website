const BookModel = require("../../Models/BookModel/BookSchema")

const getSingleBook = async (req, res) => {
    try {

        const { id } = req.params;
        const book = await BookModel.findById(id);

        if (!book) {
            res.status(404).send({ success: false, message: "Book not found" });
        }
        res.status(200).send({ success: true, message: "Book fetched successfully", data: book })
    } catch (error) {
        res.status(500).send({ success: false, message: "Internal server error", error: error.message })
    }
}
module.exports = getSingleBook;