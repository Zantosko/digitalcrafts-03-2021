const express = require("express");
const app = express();
const Sequelize = require("sequelize");
const { Doctor, Patient, Appointment } = require("./models");

const PORT = 3050;

// Middleware
app.use(express.json());

// Routes
app.post("/doctors", async (req,res) => {
  const { Name, Email } = req.body;
  const newDoctor = await Doctor.create({
    Name,
    Email
  });

  res.json({
    id: newDoctor.id
  })
})

app.post("/patients", async (req,res) => {
  const { Name, Email } = req.body;
  const newPatient = await Patient.create({
    Name,
    Email
  });

  res.json({
    id: newPatient.id
  })
})

app.post("/appointments", async (req,res) => {
  const { Date, DoctorId, PatientId } = req.body
  const newAppointment = await Appointment.create({
    Date,
    DoctorId,
    PatientId
  });

  res.json({
    id: newAppointment.id
  })
})

app.get("/appointments/patients", async (req, res) => {
  const appointments = await Appointment.findAll({
    include: [
      {
        model: Patient
      },
      {
        model: Doctor
      }
    ]
  });

  res.json(appointments);
})

app.get("/patients/appointments", async (req,res) => {
  const patients = await Patient.findAll({
    include: [{
      model: Appointment
    }]
  });

  res.json(patients);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})