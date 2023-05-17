//definir clase
class productManager{
    //crea atributo
    #product;

    constructor(){
        this.#products =[];
    }

    //metodo para obtener todos los productos
    getProducts(){
        return this.#products;
    }
    //metodo
    addProduct (title, description, price, thumbnail, code,stock){
        //estructura del objeto
        const product ={
            id:this.#products.lenght +1,//id incrementable
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        this.#products.push(product);}

    getProductById(idProducto){
        //evaluar que existe el producto
        const existeIdProducto = this.#products.find((elemento) => {
            return elemento.id == idProducto
        })
        if(existeProducto){
            const existeProduct = existeProduct.includes(idProducto);
            if(!existaProducto)
                console.log(title);
        }else{
            console.log("Not found")
        }
    }
}