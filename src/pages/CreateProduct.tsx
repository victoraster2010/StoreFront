export const CreateProduct = () => {
    return (
        <div className="mt-7 flex flex-col items-center">
            <div className="flex flex-row space-x-4">
            <input className="border border-gray-300 focus:border-mclarenOrange px-4 py-2 rounded-md outline-none"
            placeholder="Digite o nome do produto"type="text" name="produto" id="product" />
            <button className="bg-yellow-300 border-2 border-black px-2 py-2 rounded-lg transition-transform
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">Cadastrar Produto</button>

                </div>          
        </div>
    );
}