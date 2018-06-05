const Locations = require('./../models/locations');
const express = require('express');
const config = require('./../config/const');

module.exports.findLocation = (req, res) => {
    let location = req.params.address;
    Locations.findOne({
        location: location
    }, (err, resp) => {
        if (resp) {
            res.status(200).json({
                status: 200,
                data: resp
            })
        }
        else {
            res.status(201).json({
                status: 201,
                msg: 'Location not found'
            })
        }
    })
}

module.exports.saveLocation = (req, res) => {
    let locationDetails = req.body;
    Locations.findOne({
        location: locationDetails.location
    }, (err, resp) => {
        if (!resp) {
            Locations(locationDetails).save(
                locationDetails, 
            (err, resp) => {
                if (err) {
                    res.status(201).json({
                        status: 201,
                        msg: 'Location not found'
                    })
                }
                else {
                    res.status(200).json({
                        status: 200,
                        data: resp
                    })
                }
            })
        }
    })
}