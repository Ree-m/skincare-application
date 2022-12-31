const Item = require('../models/Item')




module.exports = {
  // fetch all items

  getItems: async (req, res) => {

    try {
      res.set('Access-Control-Allow-Origin', '*');

      const items = await Item.find({})
      res.status(200).send(items)
      
    } catch (error) {
      res.status(404).json({ message: error.message });

    }
  },
  // fetch an item
  getItem: async (req, res) => {
    try {
      const item = await Item.findOne({ _id: req.params.id })

      if (!item) {
        res.status(404).send({ error: "Item not found" })
      }
      res.status(200).send(item)

    } catch (error) {
      res.status(404).json({ message: error.message });

    }
  },

  // create item for admin
  createItem: async (req, res) => {

    const item=new Item({
      name: req.body.name,
      // image: result.secure_url,
      // cloudinaryId: result.public_id,
      description: req.body.description,
      category: req.body.category,
      brand:req.body.brand,
      price: req.body.price


    })

    try {
      const itemsToSave = await item.save()
      res.status(200).json(itemsToSave)

      
      
      // console.log("Item has been added!");
      // res.redirect("/items");
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteItem: async (req, res) => {
    try {
      // Find item by id
      let item = await Item.findById({ _id: req.params.id });
      // Delete image from cloudinary
      // await cloudinary.uploader.destroy(item.cloudinaryId);
      // Delete post from db
      await Item.remove({ _id: req.params.id });
      console.log("Deleted Item");
      res.redirect("/items");
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};
