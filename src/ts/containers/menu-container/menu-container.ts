import customList from "../../components/custom-list/custom-list";
import ProductsService from "../../services/products-service/products-service";


export class MenuContainer {
    onNavigate: (h: string) => void 
    productsService: ProductsService
    constructor(onNavigate: (h:string) => void){
        this.productsService = new ProductsService()
        this.productsService.getProducts()
            .then((res) => {
                const menuProducts = document.getElementById('menu-products')

                const {appetizers, mains, drinks, desserts } = res

                console.log(appetizers)
                menuProducts.innerHTML += customList(appetizers) 
                menuProducts.innerHTML += customList(mains) 
                menuProducts.innerHTML += customList(desserts)
            })
    }

    
}