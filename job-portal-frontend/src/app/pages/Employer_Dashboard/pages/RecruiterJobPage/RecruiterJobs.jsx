import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, TablePagination, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { Edit, Trash } from "iconsax-react";
import { DeleteParticularJob, getAllJobs } from "../../../../../api_calls/Recruiter_panel/Jobs/api";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(0); // Adjusted to work with TablePagination (0-based index)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setDeleteConfirmation] = useState(false); // Modal visibility state
  const [jobToDelete, setJobToDelete] = useState(null); // Job to be deleted
  const [createdBy, setcreatedBy] = useState('');
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };

  const handleDeleteClick = (jobId) => {
    setJobToDelete(jobId); // Set the job to delete
    setDeleteConfirmation(true); // Open the delete confirmation modal
  };

  const handleClose = () => {
    setDeleteConfirmation(false);
    setJobToDelete(null); // Close the modal and reset the job to delete
  };

  const handleConfirmDelete = async () => {
    const token = localStorage.getItem('token');
    if (jobToDelete) {
      try {
        await DeleteParticularJob(jobToDelete, token); // Delete the job using the API
        setJobs(jobs.filter((job) => job._id !== jobToDelete)); // Update the job list after deletion
        setDeleteConfirmation(false); // Close the modal after deleting
        setJobToDelete(null); // Reset job to delete
        enqueueSnackbar("Job Deleted Successfully!", {
          variant: "success",
        });
      } catch (error) {
        console.error("Error deleting job:", error);
        enqueueSnackbar("You Can't Delete This Job!", {
          variant: "error",
        });
      }
    }
    setDeleteConfirmation(false);
  };

  useEffect(() => {
    const getJobs = async () => {
      const jobData = await getAllJobs();
      // Extract the createdBy field from the jobs
      const createdByNames = jobData.map((job) => job.createdBy?.name || "Unknown");
      setcreatedBy(createdByNames);
      setJobs(jobData);
    };
    getJobs();
  }, []);

  // Pagination logic: Slice the jobs array
  const paginatedJobs = jobs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <main className="flex-1 shadow-lg rounded-lg p-8 bg-gradient-to-b from-white to-gray-50">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-blue-800">Job Listings</h3>
          <button
            onClick={() => navigate("/jobs-create")}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition"
          >
            Create Job
          </button>
        </div>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-800 to-purple-700 text-white">
                <th className="px-6 py-4 font-semibold text-left" style={{ width: "20%" }}>
                  Company
                </th>
                <th className="px-6 py-4 font-semibold text-left" style={{ width: "20%" }}>
                  Position
                </th>
                <th className="px-6 py-4 font-semibold text-left" style={{ width: "15%" }}>
                  Location
                </th>
                <th className="px-6 py-4 font-semibold text-left" style={{ width: "15%" }}>
                  Work Type
                </th>
                <th className="px-6 py-4 font-semibold text-left" style={{ width: "15%" }}>
                  Work Mode
                </th>
                <th className="px-6 py-4 font-semibold text-left" style={{ width: "20%" }}>
                  Uploaded By
                </th>
                <th className="px-6 py-4 font-semibold text-left" style={{ width: "15%" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedJobs.map((job, idx) => (
                <tr
                  key={job.id}
                  className={`border-b border-gray-200 transition hover:bg-gray-100 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-700 capitalize">{job.company}</td>
                  <td className="px-6 py-4 text-gray-700 capitalize">{job.position}</td>
                  <td className="px-6 py-4 text-gray-700 capitalize">{job.workLocation}</td>
                  <td className="px-6 py-4 text-gray-700 capitalize">{job.workType}</td>
                  <td className="px-6 py-4 text-gray-700 capitalize">{job.workMode}</td>
                  <td className="px-6 py-4 text-gray-700 capitalize">{job.createdBy?.name}</td>
                  <td className="px-6 py-4 flex">
                    <IconButton
                      onClick={() => navigate(`/edit-job/${job._id}`)}
                      aria-label="edit"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteClick(job._id)}
                      aria-label="delete"
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <Trash />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <TablePagination
            component="div"
            count={jobs.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Delete Job"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this job? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoHideDuration={3000}
        classes={{
          variantSuccess: "custom-snackbar",
        }}
      />
    </div>
  );
}
