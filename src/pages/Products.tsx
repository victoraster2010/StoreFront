import { ProductCard } from "../components/ProductCard"

export const Products = () => {
    return (
        <>
        <div className="flex flex-col items-center md:mt-7 md:mb-8">
            {/* Botões e campos de pesquisa */}
            <span className="md:mt-2">
                <input type="number"
                className="border-solid border-2 border-black focus:border-mclarenOrange rounded-md focus:outline-none" 
                placeholder="Insira o numero do Id do produto"/>
             <button className="border border-slate-900 md:px-4 md:py-2 md:ml-2 bg-gray-200 hover:bg-mclarenOrange rounded-md" type="button">Pesquisar</button></span>
            <span className="md:mt-8">
                <input
                className="border-solid border-2 border-black focus:border-mclarenOrange focus:outline-none rounded-md" 
                type="text" placeholder="Insira o nome do produto"/> 
                <button className="border border-slate-900 md:px-4 md:py-2 md:ml-2 bg-gray-200 hover:bg-mclarenOrange rounded-md" type="button">Pesquisar</button></span>
        </div>
        <div className="flex flex-wrap">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>

        </>
    )
}