const express = require("express")
const router = express.Router();

const salesController = require("../controllers/salesController")
router.get("/total-revenue", salesController.TotalRevenue);
router.get("/quantity-by-product", salesController.QuantityByProduct);
router.get("/top-products", salesController.TopProducts);
router.get("/average-price", salesController.AveragePrice);
router.get("/revenue-by-month", salesController.RevenueByMonth);
router.get("/highest-quantity-sold", salesController.HighestQuantitySold);
router.get("/department-salary-expense", salesController.DepartmentSalaryExpense);

module.exports=router;

//GET /api/sales/total-revenue