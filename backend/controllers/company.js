import { Company } from "../models/company.js";

export const registerCompany = async (req, res) => {
    try {
        const {companyName} = req.body;
        if(!companyName) {
            return res.status(400).json({
                success: false,
                message: "Company name is required!",
            })
        };

        const company = await Company.findOne({name: companyName});
        if(company) {
            return res.status(400).json({
                success: false,
                message: "Company already exits with this name!",
            });
        }
        await Company.create({
            name: companyName,
            userId: req.id,
        })

        return res.status(200).json({
            success: true,
            message: "Company registered successfully!",
        })
    } catch (error) {
        console.log(error);
    }
}

export const getCompanies = async (req, res)=> {
    try {
        const userId = req.id;
        const companies = await Company.find({userId});
        if(!companies) {
            return res.status(404).json({
                success: false,
                message: "Companies not found!",
            });
        }

        return res.status(200).json({
            success: true,
            companies,
        });
    } catch (error) {
        console.log(error);
    }
}

export const getCompanyById = async (req, res) => {
    try { 
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found!",
            });
        }
        return res.status(200).json({
            success: true,
            company,
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateCompany = async (req, res) => {
    try {
        const {name, description, location, website} = req.body;
        const file = req.file;

        const updateData = {name, description, location, website};

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new: true});
        if(!company)  {
            return res.status(404).json({
                success: false,
                message: "Company not found!",
            }); 
        }

        return res.status(200).json({
            success: true,
            message: "Company information updated!",
            company
        })
    } catch (error) {
        console.log(error);
    }
}