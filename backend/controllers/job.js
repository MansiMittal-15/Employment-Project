import { Job } from "../models/job.js";

export const postJob = async (req, res) => {
    try {
        const {title, description, requirements, salary, location, experienceLevel, jobType, position, companyId} = req.body;

        if(!title || !description || !requirements || !salary || !location || !experienceLevel || !jobType || !position || !companyId) {
            return res.status(400).json({
                success: false,
                message: "Some data field is missing!",
            })
        }

        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(','),
            salary : Number(salary),
            location,
            experienceLevel: Number(experienceLevel),
            jobType,
            position: Number(position),
            company: companyId,
            createdBy: req.id,
        })

        return res.status(201).json({
            success: true,
            message: "Job created successfully!",
            job,
        })
    } catch (error) {
        console.log(error);
    }
}

// for student..
export const getAllJobs = async (req, res) => {
    try { 
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                {
                    title: {
                        $regex: keyword,
                        $options: "i",
                    },
                    description: {
                        $regex: keyword,
                        $options: "i",
                    },
                }
            ]
        }
        const jobs = await Job.find(query);
        if(!jobs || jobs.length == 0) {
            return res.status(404).json({
                success: false,
                message: "Jobs not found!",
            })
        }
        return res.status(200).json({
            success: true,
            jobs,
        })
    } catch (error) {
        console.log(error);
    }
}

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(404).json({
                success: false,
                message: "Job Not found!",
            })
        }
        return res.status(200).json({
            success: true,
            job,
        });
    } catch (error) {
        console.log(error);
    }
}

// get admin's jobs..
export const getAdminJobs = async(req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({createdBy: adminId});
        if(!jobs || jobs.length == 0) {
            return res.status(404).json({
                success: false,
                message: "Jobs not found!",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Jobs found successfully!",
            jobs, 
        });
    } catch (error) { 
        console.log(error);
    }
}