import { SaleFullCard } from "../components/SaleFullCard"

export const Sales: React.FC = () => {
    return (
        <div>
            <div className="md:mt-7 md:mb-8 flex flex-col items-center">
                <span>
                    <input
                        className="border border-gray-300 focus:border-mclarenOrange px-4 py-2 rounded-md outline-none mr-3"
                        type="text" name="sale-id" id="sale-id" placeholder="Informe o id" />
                    <button className="bg-yellow-300 border-2 border-black px-2 py-2 rounded-lg transition-transform
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50" type="button">Pesquisar</button>
                </span>
            </div>
            <div className="flex flex-row flex-wrap">
            <SaleFullCard />
            <SaleFullCard />
            <SaleFullCard />
            <SaleFullCard />
            <SaleFullCard />
            <SaleFullCard />
            <SaleFullCard />
            <SaleFullCard />
            <SaleFullCard />
            <SaleFullCard />
            </div>
        </div>

    )
}