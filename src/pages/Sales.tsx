import { SaleFullCard } from "../components/SaleFullCard"

export const Sales: React.FC = () => {
    return (
        <div>
            <div className="md:mt-7 md:mb-8 flex flex-col items-center">
                <span>
                    <input
                        className="rounded border border-gray-800"
                        type="text" name="sale-id" id="sale-id" placeholder="Informe o id" />
                    <button className="border border-slate-900 md:px-4 md:py-2 md:ml-2 bg-gray-200 hover:bg-white" type="button">Pesquisar</button>
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