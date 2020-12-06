const model = require('../database/models');

const createRoom = async (req, res) => {
  try {
    const room = await model.roomModel.create(req.body);
      //console.log(room)
    return res.status(201).json({
      room,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = {createRoom,} 
