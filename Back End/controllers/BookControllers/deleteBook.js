const BookModel = require("../../Models/BookModel/BookSchema");

const deleteBook = async (req, res) => {
    try {

        const { id } = req.params;

        const deleteBook = await BookModel.findByIdAndDelete(id);

        if (!deleteBook) {
            res.status(404).send({ success: false, message: "Book not found" });
        }

        res.status(200).send({ success: true, message: "Book deleted successfully", data: deleteBook });

    } catch (error) {
        res.status(500).send({ success: false, message: "Internal server error", error: error.message });
    }
}
module.exports = deleteBook