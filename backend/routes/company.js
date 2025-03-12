import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getCompanies, getCompanyById, registerCompany, updateCompany } from "../controllers/company.js";

const router = express.Router();

router.route('/register').post(isAuthenticated, registerCompany);
router.route('/get').get(isAuthenticated, getCompanies);
router.route('/get/:id').get(isAuthenticated, getCompanyById);
router.route('/:id/update').put(isAuthenticated, updateCompany);

export default router;