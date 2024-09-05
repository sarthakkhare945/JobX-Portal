import express from "express";

import {
  CreateJobController,
  DeleteParticularJob,
  featuredJobs,
  getAllJobs,
  getJobsByMode,
  getParticularJob,
  jobsStatsController,
  updateJobs,
} from "../controllers/jobsController.js";
import multer from "multer";
import {
  AddHiringPosition,
  deleteHiringPosition,
  getAllHiringPosition,
  // jobSearch
} from "../controllers/customfieldsController.js";
import UserAuth from "../middlewares/authMiddleware.js";
import { userRoleCheck } from "../middlewares/userRoleCheck.js";

const router = express.Router();
const upload = multer();

/**
 * @swagger
 * /api/job/create-job:
 *   post:
 *     summary: Create a new job
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Jobs
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job created successfully
 *       400:
 *         description: Bad request
 */
router.post(
  "/create-job",
  UserAuth,
  upload.none(),
  userRoleCheck,
  CreateJobController
);

/**
 * @swagger
 * /api/job/job-roles:
 *   get:
 *     summary: Get all job roles
 *     tags:
 *       - Job Roles
 *     responses:
 *       200:
 *         description: List of job roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   role:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router.get("/job-roles", getAllHiringPosition);

/**
 * @swagger
 * /api/job/add-job-role:
 *   post:
 *     summary: Add a new job role
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Job Roles
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job role added successfully
 *       400:
 *         description: Bad request
 */
router.post(
  "/add-job-role",
   upload.none(),
  // UserAuth,
  // user,
  AddHiringPosition
);

/**
 * @swagger
 * /api/job/delete-role/{id}:
 *   delete:
 *     summary: Delete a job role by ID
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Job Roles
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job role to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Job role deleted successfully
 *       404:
 *         description: Job role not found
 */
router.delete(
  "/delete-role/:id",
  UserAuth,
  userRoleCheck,
  deleteHiringPosition
);

/**
 * @swagger
 * /api/job/get-jobs:
 *   get:
 *     summary: Get all jobs
 *     tags:
 *       - Jobs
 *     responses:
 *       200:
 *         description: List of jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router.get("/get-jobs", getAllJobs);

/**
 * @swagger
 * /api/job/featured-jobs:
 *   get:
 *     summary: Get featured jobs
 *     tags:
 *       - Jobs
 *     responses:
 *       200:
 *         description: List of featured jobs
 *       500:
 *         description: Internal server error
 */
router.get("/featured-jobs", featuredJobs);

/**
 * @swagger
 * /api/job/category:
 *   get:
 *     summary: Get jobs by category
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: query
 *         name: workMode
 *         required: false
 *         description: The category of jobs to retrieve
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: List of jobs by category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router.get("/category", getJobsByMode);

/**
 * @swagger
 * /api/job/get-job/{id}:
 *   get:
 *     summary: Get a job by ID
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job details
 *       404:
 *         description: Job not found
 */
router.get("/get-job/:id", getParticularJob);

/**
 * @swagger
 * /api/job/update-job/{id}:
 *   patch:
 *     summary: Update a job by ID
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job to update
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Job not found
 */
router.patch("/update-job/:id",upload.none() ,UserAuth, userRoleCheck, updateJobs);

/**
 * @swagger
 * /api/job/delete-job/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 */
router.delete("/delete-job/:id", UserAuth, userRoleCheck, DeleteParticularJob);


/**
 * @swagger
 * /api/job/job-stats:
 *   get:
 *     summary: Get job statistics
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Jobs
 *     responses:
 *       200:
 *         description: Job statistics
 *       500:
 *         description: Internal server error
 */
router.get("/job-stats", UserAuth, jobsStatsController);

// router.post("/jobs/search", jobSearch);

export default router;
