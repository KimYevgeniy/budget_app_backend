const incomeSchema = require("../models/incomeModel");

exports.postIncome = async (req, res) => {
  const { description, amount, category, date } = req.body;

  const income = incomeSchema({
    description,
    amount,
    category,
    date,
  });

  try {
    if (!description || !amount || !category || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await income.save();
    res.status(200).json({ message: "income Added" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getIncome = async (req, res) => {
    try {
        const income = await incomeSchema.find().sort({createdAt: -1})
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  incomeSchema
    .findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
