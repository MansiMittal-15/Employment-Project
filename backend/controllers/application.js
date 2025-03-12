import { Application } from "../models/application.js";
import { Job } from "../models/job.js";
import { User } from "../models/user.js";

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        const user = await User.findById(userId);
        if(user.role === "recruiter") {
            return res.status(403).json({
                success: false,
                message: "Recruiters can't apply to the jobs!",
            });
        }
        if(!jobId) {
            return res.status(400).json({
                success: false,
                message: "Job id is required!",
            });
        }
        const existingApplication = await Application.findOne({applicant: userId, job: jobId});
        if(existingApplication) {
            return res.status(400).json({
                success: false,
                message: "You have already applied for this job!",
            });
        }
        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found!",
            })
        }
        const newApplication = await Application.create({
            applicant: userId,
            job: jobId,
        }); 

        job.applications.push(newApplication._id);

        await job.save();

        return res.status(201).json({
            success: true,
            message: "Job applied successfully!",
        });
    } catch (error) {
        console.log(error);
    }
}

export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const applications = await Application.find({applicant: userId}).sort({createdAt: -1}).populate({
            path: 'job',
            options: {sort:{createdAt: -1}},
            populate: {
                path: 'company',
                options: {sort: {createdAt: -1}},
            },
        })

        if(!applications) {
            return res.status(404).json({
                success: false,
                message: "No applications found!",
            });
        }

        return res.status(200).json({
            success: true,
            applications,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        if(!jobId) {
            return res.status(400).json({
                success: false,
                message: "Job id is required!",
            });
        }
        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found!",
            });
        }
        const applicants = await job.populate({
            path: 'applications',
            options: {sort: {createdAt: -1}},
            populate: {
                path: 'applicant',
                options: {sort: {createdAt: -1}},
            },
        });

        if(!applicants) {
            return res.status(404).json({
                success: false,
                message: "No applicants found!",
            });
        }
        return res.status(200).json({
            success: true,
            applicants,
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateStatus = async (req, res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status) {
            return res.status(400).json({
                success: false,
                message: "Status is required!",
            });
        }

        const application = await Application.findById(applicationId);
        if(!application) {
            return res.status(404).json({
                success: false,
                message: "Application not Found!",
            });
        }

        application.status = status;
        await application.save();
        return res.status(200).json({
            success: true,
            message: "Status updated successfully!",
        });
    } catch (error) {
        console.log(error);
    }
}