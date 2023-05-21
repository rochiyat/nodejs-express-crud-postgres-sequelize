const db = require('../models');
const Postings = db.postings;
const Op = db.Sequelize.Op;

// create posting
exports.create = (req, res) => {

    const { title, description, published } = req.body;
    // validate request
    if (!title) {
        res.status(400).send({
            message: 'Content cant be empty'
        })
        return;
    }

    // create a posting
    const posting = {
        title,
        description,
        published
    };

    // save posting in database
    Postings.create(posting)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error when create posting'
            });
        });
};

// get all posting
exports.findAll = (req, res) => {
    const { title } = req.query;
    let condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Postings.findAll({
        where: condition
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error when retrieving posting'
        });
    });
};

// get one posting by id
exports.findOne = (req, res) => {
    const { id } = req.params;

    Postings.findByPk(id)
        .then(data => {
            console.log('data', !data, data);
            if(data){
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Can not find data posting by id ${id}`
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Error retrieving posting by id ${id}`
            })
        })
};

// update one posting by id
exports.update = (req, res) => {
    const { id } = req.params;

    Postings.update(req.body, {
        where: {
            id
        }
    }).then(num => {
        if(num[0] === 1) {
            res.send({
                message: 'Posting was updated successfully'
            });
        } else {
            res.send({
                message: `Can not update Posting with id ${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: `Error updating Posting with id ${id}`
        });
    });
};

// delete one posting by id
exports.delete = (req, res) => {
    const { id } = req.params;

    Postings.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num[0] === 1) {
          res.send({
            message: "Posting was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Posting with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Posting with id=" + id
        });
      });
};

// delete all posting
exports.deleteAll = (req, res) => {
    Postings.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums[0]} Posting were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Postings."
          });
        });
};

exports.findAllPublished = (req, res) => {
    Postings.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving postings."
      });
    });
};