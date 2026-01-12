const express = require('express');
const Bed = require('../models/Bed');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { bedNumber } = req.body;

  try {
    const newBed = new Bed({
      hospital: req.user.id,
      bedNumber
    });

    const bed = await newBed.save();
    res.json(bed);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const beds = await Bed.find({ hospital: req.user.id });
    res.json(beds);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    let bed = await Bed.findById(req.params.id);

    if (!bed) return res.status(404).json({ msg: 'Bed not found' });

    if (bed.hospital.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Bed.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Bed removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;