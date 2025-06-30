const express = require('express');
const router = express.Router();
const timeDealController = require('../controllers/timeDealController');

router.get('/', timeDealController.getActiveTimeDeals);
router.get('/all', timeDealController.getAllTimeDeals);
router.post('/', timeDealController.createTimeDeal);
router.put('/:id', timeDealController.updateTimeDeal);
router.delete('/:id', timeDealController.deleteTimeDeal);

module.exports = router;
