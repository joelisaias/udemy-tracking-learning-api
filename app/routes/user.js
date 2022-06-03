const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.send('Hello World get'));

router.get('/:id',  (req,res) => res.send(`Hello World get ${req.params.id}`));

router.post('/', (req,res) => res.send(`Hello World Post`));

router.put('/:id', (req,res) => res.send(`Hello World Put ${req.params.id}`));

router.delete('/:id', (req,res) => res.send(`Hello World Delete ${req.params.id}`));


module.exports = router;