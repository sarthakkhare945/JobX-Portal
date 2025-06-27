import { AccessTimeOutlined, BusinessCenterOutlined, CalendarMonthRounded, DirectionsWalkOutlined, Laptop } from '@mui/icons-material';
import { Card, CardContent } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

const JobsForYour = () => {
  return (
    <section className="bg-white-100 px-4 md:px-6 w-full">
      <motion.div
         initial={{y:100,opacity:0}}
         whileInView={{y:0,opacity:1}}
         viewport={{ once: true }}
         transition={{
           delay: 0.2,
           y:{
             type: 'spring',
             stiffness: 60
           },
           opacity:{
             duration: 0.2,
           },
           ease: 'easeIn',
           duration: 1,
         }}
      
      
      
      className="container mx-auto">
        <div className="flex justify-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Jobs For You
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
          <Card className="group">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                whileHover={{ scale: 1.2 }}
              >
                <DirectionsWalkOutlined style={{ fontSize: '40px', color: '#4CAF50' }} /> {/* Green */}
              </motion.div>
              <div className="text-center">
                <h3 className="text-base font-semibold">Walk-in Jobs</h3>
                <p className="text-muted-foreground text-sm">
                  Work from our office, collaborating with your team in person.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="group">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                whileHover={{ scale: 1.2 }}
              >
                <Laptop style={{ fontSize: '40px', color: '#2196F3' }} /> {/* Blue */}
              </motion.div>
              <div className="text-center">
                <h3 className="text-base font-semibold">Remote</h3>
                <p className="text-muted-foreground text-sm">
                  Work from anywhere, with the flexibility to balance your life.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="group">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                whileHover={{ scale: 1.2 }}
              >
                <BusinessCenterOutlined style={{ fontSize: '40px', color: '#FF9800' }} /> {/* Orange */}
              </motion.div>
              <div className="text-center">
                <h3 className="text-base font-semibold">Hybrid</h3>
                <p className="text-muted-foreground text-sm">
                  Enjoy the best of both worlds, with a mix of on-site and remote work.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="group">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                whileHover={{ scale: 1.2 }}
              >
                <CalendarMonthRounded style={{ fontSize: '40px', color: '#F44336' }} /> {/* Red */}
              </motion.div>
              <div className="text-center">
                <h3 className="text-base font-semibold">Freelance</h3>
                <p className="text-muted-foreground text-sm">
                  Work on your own schedule, taking on projects that fit your expertise.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="group">
            <CardContent className="flex flex-col items-center justify-center gap-4 p-4">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                whileHover={{ scale: 1.2 }}
              >
                <AccessTimeOutlined style={{ fontSize: '40px', color: '#9E9E9E' }} /> {/* Gray */}
              </motion.div>
              <div className="text-center">
                <h3 className="text-base font-semibold">Shift</h3>
                <p className="text-muted-foreground text-sm">
                  Flexible schedules to accommodate your lifestyle, with set shifts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default JobsForYour;
