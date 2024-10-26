const BookModel = require("../../Models/BookModel/BookSchema");

const editBooks = async (req, res) => {
    try {
        const { id } = req.params;

        const updateBook = await BookModel.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateBook) {
            res.status(404).send({ success: false, message: "Book not found" });
        }
        res.status(200).send({ success: true, message: "Book updated successfully", data: updateBook });

    } catch (error) {
        res.status(500).send({ success: false, message: "Internal server error", error: error.message });
    }
}
module.exports = editBooks;