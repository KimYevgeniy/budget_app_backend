const { postExpense, deleteExpense, getExpense } = require("../controllers/expense");
const { postIncome, deleteIncome, getIncome } = require("../controllers/income");

const router = require("express").Router();

router
  .post("/postIncome", postIncome)
  .get("/getIncome", getIncome)
  .delete("/deleteIncome/:id", deleteIncome)
  .post("/postExpense", postExpense)
  .get("/getExpense", getExpense)
  .delete("/deleteExpense/:id", deleteExpense)

module.exports = router;
