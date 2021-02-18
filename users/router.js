

const router = require("express").Router();

router.get("/", (req, res) => {
  Users.all()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(({ name, message, stack, code }) => {
      console.log({ name, message, stack, code });

      res.status(500).json({ name, message, stack, code });
    });
});


router.post("/register", (req, res) => {
    let user = req.body;
    
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });


router.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
  });
});


module.exports = router;