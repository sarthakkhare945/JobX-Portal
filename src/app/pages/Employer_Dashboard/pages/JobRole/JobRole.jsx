import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const JobRole = () => {
  const [jobRoles, setJobRoles] = useState([
    { id: 1, role: 'Software Engineer' },
    { id: 2, role: 'UI/UX Designer' },
    { id: 3, role: 'Data Analyst' },
  ]);

  const [newRole, setNewRole] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewRole('');
  };

  const addJobRole = () => {
    if (newRole.trim() !== '') {
      const newJob = { id: Date.now(), role: newRole };
      setJobRoles([...jobRoles, newJob]);
      handleCloseModal();
    }
  };

  const deleteJobRole = (id) => {
    setJobRoles(jobRoles.filter((role) => role.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-blue-700">Job Roles</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          className="shadow-md"
        >
          Add Role
        </Button>
      </div>

      {/* Modal for Adding Role */}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Add New Job Role</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Job Role"
            type="text"
            fullWidth
            variant="outlined"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={addJobRole} color="primary">
            Add Role
          </Button>
        </DialogActions>
      </Dialog>

      {/* Display Job Roles in Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobRoles.map((job) => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800">{job.role}</h3>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => deleteJobRole(job.id)}
                className="text-red-600 border border-red-600 px-4 py-1 rounded-md hover:bg-red-600 hover:text-white transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRole;