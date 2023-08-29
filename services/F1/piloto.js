const axios = require("axios")

async function getAllDrivers() {
    try {
        const response = await axios.get("http://ergast.com/api/f1/drivers.json")
        return response.data.MRData.DriverTable.Drivers
    } catch (error) {
        throw error
    }
}

async function getDriversByYear(year) {
    try {
        const response = await axios.get(`http://ergast.com/api/f1/${year}/drivers.json`)
        return response.data.MRData.DriverTable.Drivers
    } catch (error) {
        throw error
    }
}

async function getDriverById(id) {
    try {
        const response = await axios.get(`http://ergast.com/api/f1/drivers/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllDrivers,
    getDriversByYear,
    getDriverById
}