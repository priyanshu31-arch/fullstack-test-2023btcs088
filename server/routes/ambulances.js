const express = require('express');
const Ambulance = require('../models/Ambulance');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { ambulanceNumber } = req.body;

  try {
    const newAmbulance = new Ambulance({
      hospital: req.user.id,
      ambulanceNumber
    });

    const ambulance = await newAmbulance.save();
    res.json(ambulance);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const ambulances = await Ambulance.find({ hospital: req.user.id });
    res.json(ambulances);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    let ambulance = await Ambulance.findById(req.params.id);

    if (!ambulance) return res.status(404).json({ msg: 'Ambulance not found' });

    if (ambulance.hospital.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Ambulance.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Ambulance removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;