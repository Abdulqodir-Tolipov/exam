import { read, write } from '../../lib/orm.js'

const category = ({ userId }) => {
	let category = read('categories')
	let subcategories = read('subCategories')
	let product = read('products')
	if(userId) {
		let catData = category.filter( cgy => cgy.categories_id == userId ) 
		return catData
	} else {
		for(let cgy of category){
			let subcategory = subcategories.filter(val => val.categories_id == cgy.categories_id)
			subcategory = subcategory.filter(val => delete( val.categories_id ))
			cgy.subCategories = subcategory
		}
		return category
	}
}

const categ = ({catId}) => {
	try{
	let category = read('categories')
	return category.find(val => val.categories_id == catId)
	}catch(err){
		return err
	} 
}

const getCategories = () => {
    
    const categoriesData = read('categories')
    const subcategoriesData = read('subCategories')

	// console.log(categoriesData);
    
    let global = []
    let subGlobal = []
    
    const test = categoriesData.forEach(element => {
		// console.log(element.categories_id);
        
        let array = subcategoriesData.filter(el => el.category_id == element.categories_id)

        // console.log(array);
        
        let cat
        for (const i of array) {
            let sub
            sub = {
                subCategoryId: i.sub_category_id,
                subCategoryName: i.sub_category_name,
            }
            subGlobal.push(sub)
        }        


        cat = {
            categoryId: element.categories_id,
            categoryName: element.categories_name,
            subCategories: subGlobal
        }
        
        global.push(cat)
    });

    return global
}

getCategories()

export default {
    category,
	categ,
	getCategories

}