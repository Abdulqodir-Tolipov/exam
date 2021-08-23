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

const getSubCategories = () => {

    const categoriesData = read('categories')
    const subcategoriesData = read('subCategories')
    const productsData = read('products')

    let globala = []
    let proGlobal = []


    const test = subcategoriesData.forEach(element => {

        let array = productsData.filter(el => el.sub_category_id === element.sub_category_id)

        // console.log(array);

        let subCat

        for (const i of array) {
            // console.log(i);
            let pro
            pro = {
                productId: i.product_id,
                productName: i.product_name,
                model: i.product_model,
                price: i.product_price,
                color: i.product_color,
            }
            proGlobal.push(pro)
        }

        subCat = {
            subCategoryId: element.sub_category_id,
            subCategoryName: element.sub_category_name,
            products: proGlobal
        }

        globala.push(subCat)
    });

    return globala
}

getSubCategories()

export default {
    category,
	categ,
	getSubCategories
}