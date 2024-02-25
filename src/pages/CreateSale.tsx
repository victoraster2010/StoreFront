export const CreateSale = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <div className="flex flex-col">
                <input placeholder="Insira o Id do produto"
                className="border border-gray-300 focus:border-mclarenOrange px-4 py-2 rounded-md outline-none mb-3"
                type="number" required name="sale" id="productid" />
                <input className="border border-gray-300 focus:border-mclarenOrange px-4 py-2 rounded-md outline-none"
                placeholder="Insira a quantidade"
                type="number" name="quantity" id="quantidadesale" />
                <button className="mt-3 bg-yellow-300 border-2 border-black px-2 py-2 rounded-lg transition-transform
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">Criar Produto</button>
            </div>
        </div>
    )
}