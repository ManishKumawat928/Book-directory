const express = require("express");
const router = express.Router();
const Books = require("../models/setApi");
const auth = require("../middleware/auth");
router.post("/books",auth, async (req, res) => {
  try {
    const addApi = new Books(req.body);
    const insertApi = await addApi.save();
    res.status(201).send(insertApi);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

router.get("/books",auth, async (req, res) => {
  try {
    const getsApi = await Books.find();
    res.status(201).send(getsApi);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/books/:id",auth, async (req, res) => {
  try {
    const id = req.params.id;
    const getApi = await Books.findById(id);
    res.status(201).send(getApi);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.put("/books/:id",auth, async (req, res) => {
  try {
    const id = req.params.id;
    const updateApi = await Books.findByIdAndUpdate(id, req.body, {new: true});
    res.status(201).send(updateApi);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/books/:id",auth, async (req, res) => {
  try {
    const id = req.params.id;
    const deleteApi = await Books.findByIdAndDelete(id);
    res.status(201).send(deleteApi);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
module.exports = router;
