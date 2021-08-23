import { read, write } from "../../lib/orm.js"

let search = []
let testtt

const checkProduct = ({ productId, productName, model, color , price}) => {
    const products = read('products')
    for (const i of products) {
        let productA
        productA = {
            productId: i.product_id,
            model: i.model,
            color: i.color,
            productName: i.product_name,
            price: i.price
        }
        search.push(productA)

        
    }
    const productt = search.find(el => el.productId == productId)
    const modell = search.find(el => el.model == model)
    const colorr = search.find(el => el.color == color)
    const productNamee = search.find(el => el.productName == productName)
    const pricee = search.find(el => el.price == price)
    if(productt)testtt = productt
    if(modell)testtt = modell
    if(colorr)testtt = colorr
    if(productNamee) testtt = productNamee
    if(pricee) testtt = pricee


    return testtt
}

export default checkProduct