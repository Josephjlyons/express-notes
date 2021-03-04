const path = require('path');
const express = require('express');
const router = require('express').Router();


router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname), '../index.html');
});

module.exports = router;