var express = require('express')
var db = require('../database.js')
var router = express.Router()

router.get('/', function (req, res, next) {
  db.query('SELECT * FROM contacts ORDER BY id desc', function (err, rows) {
    if (err) {
      req.flash('error', err)
      res.render('profile', { data: '' })
    } else {
      res.render('profile', { data: rows })
    }
  })
})
module.exports = router