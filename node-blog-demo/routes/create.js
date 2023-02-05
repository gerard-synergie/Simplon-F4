var express = require('express')
var connection = require('../database.js')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('create', { title: 'User Form' })
  })

router.post('/', function (req, res, next) {
    var firstname = req.body.firstname
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var sql = `INSERT INTO contacts (f_name,l_name, email, message) VALUES ("${firstname}","${name}", "${email}", "${message}")`
    connection.query(sql, function (err, result) {
      if (err) throw err
      console.log('Row has been updated')
      req.flash('success', 'Data stored!')
      res.redirect('/create')
    })
  })

  module.exports = router