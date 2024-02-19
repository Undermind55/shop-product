var Customer = require("../../models/customers/customers.model");

module.exports.getCustomer = async (req, res) => {
    try{
        const getCustomer = await Customer.find();
        return res.status(200).send({message:"Get Customer SUccess",data: getCustomer})
    }catch(error){
        return res.status(500).send({message: "Internal server error", error: error.message});
    }
}