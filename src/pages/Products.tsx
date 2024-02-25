import { ProductCard } from "../components/ProductCard"

export const Products = () => {
    return (
        <>
        <div className="flex flex-col items-center md:mt-7 md:mb-8">
            {/* Botões e campos de pesquisa */}
            <span className="md:mt-2">
                <input type="number"
                className="border-solid border-2 border-black focus:border-mclarenOrange rounded-md focus:outline-none px-4 py-2" 
                placeholder="Insira o numero do Id do produto"/>
             <button className="bg-yellow-300 border-2 border-black px-2 py-2 rounded-lg transition-transform
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ml-4" type="button">Pesquisar</button></span>
            <span className="md:mt-8">
                <input
                className="border-solid border-2 border-black focus:border-mclarenOrange focus:outline-none rounded-md px-4 py-2" 
                type="text" placeholder="Insira o nome do produto"/> 
                <button className="bg-yellow-300 border-2 border-black px-2 py-2 rounded-lg transition-transform
            transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 ml-4" type="button">Pesquisar</button></span>
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