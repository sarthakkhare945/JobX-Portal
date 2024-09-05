import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

const DashboardContainer = styled(Box)({
  padding: '20px',
  backgroundColor: '#f5f6fa',
  minHeight: '100vh',
});

const SectionCard = styled(Card)({
  boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
  borderRadius: '12px',
  backgroundColor: '#fff',
});

const SectionHeader = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
});

const RoleItem = styled(ListItem)({
  backgroundColor: '#e0f7fa',
  borderRadius: '8px',
  marginBottom: '8px',
  '&:hover': {
    backgroundColor: '#b2ebf2',
  },
});

const JobItem = styled(ListItem)({
  backgroundColor: '#fce4ec',
  borderRadius: '8px',
  marginBottom: '8px',
  '&:hover': {
    backgroundColor: '#f8bbd0',
  },
});

const Dashboard = () => {
  const topJobs = [
    "Full Stack Developer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "DevOps Engineer",
  ];

  const topRoles = [
    "Software Engineer",
    "Project Manager",
    "Data Analyst",
    "QA Engineer",
    "Tech Lead",
  ];

  return (
    <DashboardContainer>
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#3f51b5',fontWeight:'600' }}>
        Recruiter Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Top 5 Jobs */}
        <Grid item xs={12} md={6}>
          <SectionCard>
            <CardContent>
              <SectionHeader>Top 5 Jobs</SectionHeader>
              <List>
                {topJobs.map((job, index) => (
                  <JobItem key={index}>
                    <ListItemText primary={job} />
                  </JobItem>
                ))}
              </List>
            </CardContent>
          </SectionCard>
        </Grid>

        {/* Top 5 Roles */}
        <Grid item xs={12} md={6}>
          <SectionCard>
            <CardContent>
              <SectionHeader>Top 5 Roles</SectionHeader>
              <List>
                {topRoles.map((role, index) => (
                  <RoleItem key={index}>
                    <ListItemText primary={role} />
                  </RoleItem>
                ))}
              </List>
            </CardContent>
          </SectionCard>
        </Grid>

        {/* Additional Section for Metrics or Data Visualization */}
        <Grid item xs={12}>
          <SectionCard>
            <CardContent>
              <SectionHeader>Overall Metrics</SectionHeader>
              <Typography variant="body2" color="textSecondary">
                {/* Placeholder for charts, graphs, or any additional metrics */}
                You can add charts, graphs, or other important metrics here to give more insights.
              </Typography>
            </CardContent>
          </SectionCard>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
