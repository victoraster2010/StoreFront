import { ProductNotFound } from "../components/ProductNotFound"

export const DeleteProduct = () => {
    return (
        <div className="flex flex-col items-center mt-6">
            <div>
                <input className="border border-gray-300 focus:border-mclarenOrange px-4 py-2 rounded-md outline-none mb-5"
                    type="text" placeholder="Digite o nome do produto" />
                <button className="mt-3 ml-3 bg-yellow-300 border-2 border-black px-2 py-2 rounded-lg transition-transform
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">Procurar</button>

            </div>
            <ProductNotFound />
        </div>
    )
}