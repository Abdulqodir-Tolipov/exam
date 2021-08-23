import checkProduct from "./model.js";

const getProduct = (req, res) => {
    try {
        res.send(checkProduct(req.query))
    } catch (error) {
        
    }
}

export default getProduct