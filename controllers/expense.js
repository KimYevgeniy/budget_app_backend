const expenseSchema = require("../models/expenseModel");

exports.postExpense = async (req, res) => {
  const { description, amount, category, date } = req.body;

  const expense = expenseSchema({
    description,
    amount,
    category,
    date,
  });

  try {
    if (!description || !amount || !category || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await expense.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server errpr" + error });
  }
};

exports.getExpense = async (req, res) => {
    try {
        const expense = await expenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message: "Server Error" + error})
    }
}

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  expenseSchema
    .findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense deleted" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Error"  + error });
    });
};
