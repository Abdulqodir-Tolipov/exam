import { read, write } from '../../lib/orm.js'
import JWT from '../../lib/jwt.js'
import model from '../../modules/subCategories/model.js'

const categoriesAdd = (req,res,next) => {
    try {
        let data = ''
        let {token} = req.headers
        if(!token) throw 'The token required';
        let { userId } = JWT.verify(token)
        console.log(userId);
        data = req.body
        console.log(req.body.categories_name);
        if(userId){
            let category = read('categories')
            let newCategories = {
                categories_id : category.length ? category[category.length-1].categories_id + 1 : 1,
                categories_name: req.body.categories_name
            }
            console.log(newCategories.categories_name);
            category.push(newCategories)
            if(write('categories',category)) res.status(201).json({ status: 201, message: 'categories successfully' })
        }
    }catch(err){
        res.status(401).json({ status: 401, message: err })	
    }  
}

const categoryQuery = (req, res) => {
    try {
      res.status(200).send( model.category(req.query) )
      console.log(req.query);
    } catch (error) {
      console.log(error)
    }
  }
  
  const categoryParams = (req, res) => {
    try {
      res.status(200).send( model.categ(req.params) )
    } catch (error) {
      console.log(error)
    }
  }
  const geta = (req, res) => {
    try {
      res.send( model.getCategories() )
    } catch (error) {
      console.log(error)
    }
  }
  const getSubCategories = (req, res) => {
    try {
      console.log(model.getSubCategories);
      res.send(model.getSubCategories())
    } catch (error) {
      console.log(error)
    }
  }

export {  
    categoryQuery,
    categoryParams,
    categoriesAdd,
    geta,
    getSubCategories
}