const BookModel = require("../../Models/BookModel/BookSchema")

const CreateBook = async (req, res) => {
    try {
        const newBook = new BookModel({ ...req.body });
        await newBook.save();
        res.status(200).send({ success: true, message: "Book created successfully", data: newBook })

    } catch (error) {
        res.status(500).send({ success: false, message: "Internal server error", error: error.message })
    }
}
module.exports = CreateBook