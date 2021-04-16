const { Router } = require('express')
const db = require('../db.json')
const router = Router()

router.get('/', (req, res) => {
	res.render('index', {
		db
		// user: {
		// 	maks: db[0].name,
		// 	nazar: db[1].name
		// }
	})
})

console.log(db)

module.exports = router