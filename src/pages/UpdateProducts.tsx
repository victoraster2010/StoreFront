export const UpdateProducts = () => {
    return (
        <div className="flex flex-col items-center mt-7">
            <div className="flex flex-row">
                <input className="px-4 py-2 border border-gray-300 focus:border-mclarenOrange rounded-md outline-none mb-5"
                type="text" placeholder="Informe o nome do produto"/>
                <button>Pesquisar</button>
            </div>
            <div>
                <input className="px-4 py-2 border border-gray-300 focus:border-mclarenOrange rounded-md outline-none"
                 type="text" placeholder="Ou Informe o id do produto" />
                <button>Pesquisar</button>
            </div>
        </div>
    )
}