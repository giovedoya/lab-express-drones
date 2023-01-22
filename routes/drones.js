const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

/* GET all drones page. */
/* ROUTE drones*/
router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find({});
    res.render('./drones/list', { drones });    
  } catch (error) {
    next(error)
  }
});

/* GET form drones */
/* ROUTE drones/create*/
router.get('/drones/create', (req, res, next) => {
  res.render('./drones/create-form')
});

/* POST  create page. */
/* ROUTE drones/create*/
router.post('/drones/create', async (req, res, next) => {
  const { name, propellers, maxSpeed,} = req.body;
  try {
     await Drone.create({name, propellers, maxSpeed});
    res.redirect('/drones');
  } catch (error) {
    next(error)
  }
});

/* GET  form edit drone */
/* ROUTE drones/edit*/
router.get('/drones/:id/edit', async (req, res, next) => {
  const { id } = req.params;
  try {
    const drone = await Drone.findById(id);
    res.render("./drones/update-form", drone);
  } catch (error) {
    next(error)
  }
});

/* POST edit drones */
/* ROUTE drones/edit*/
router.post('/drones/:id/edit', async (req, res, next) => {
 const { name, propellers, maxSpeed } = req.body;
 const { id } = req.params;
 try {
  const editDrone = await Drone.findByIdAndUpdate( id, { name, propellers, maxSpeed})
  res.redirect('/drones')
 } catch (error) {
  next(error)
 }
});

/* GET delete */
/* ROUTE drones/delete*/
router.get('/drones/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Drone.findByIdAndDelete(id);
    res.redirect('/drones');
  } catch (error) {
    next(error);
  }
});

module.exports = router;