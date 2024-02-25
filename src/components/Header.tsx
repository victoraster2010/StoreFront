interface Props {
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: React.FC<Props> = ({ setPage }) => {
    const handleNavigation = (page: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        setPage(page);
    };
    return (
        <header>
            <div className="bg-mclarenOrange h-20 flex justify-between items-center text-mclarenBlueTxt">
                <a href="#" className="font-bold md:text-3xl md:ml-40 md:mt-3 md:mb-7 md:mr-28 text-mclarenBlueTxt
                md:hover:scale-150 md:hover:text-white">
                    StoreFront
                </a>
                <div className="flex flex-col items-center">
                    <img className="inline w-14 h-14" src="shopping-cart-outline-svgrepo-com.svg" alt="Storefront" />
                    {/* width={56} height={50} */}
                    <span>0 items</span>
                </div>

                <div className="flex flex-row justify-around items-center h-1/2">
                    <a className="mr-4 py-7 hover:shadow-lg transition duration-300 ease-in-out hover:bg-greyClaren" 
                    onClick={(event) => handleNavigation('create-product', event)} href="#">Cadastro de Produtos</a>
                    <a className="mr-4 py-7 font-normal hover:bg-greyClaren hover:shadow-lg transition duration-300 ease-in-out" href="#">Cadastro de Vendas</a>
                    <a className="mr-4 py-7 hover:bg-greyClaren hover:shadow-lg transition duration-300 ease-in-out" 
                    onClick={(event) => handleNavigation('sales', event)} href="#">Vendas</a>
                    <a className="mr-4 py-7 hover:bg-greyClaren hover:shadow-lg transition duration-300 ease-in-out"
                        onClick={(event) => handleNavigation('products', event)}>Produtos</a>
                    <a className="mr-4 py-7 hover:bg-greyClaren hover:shadow-lg transition duration-300 ease-in-out" href="#">Atualizar</a>
                    <a className="md:mr-24 py-7 hover:bg-greyClaren hover:shadow-lg transition duration-300 ease-in-out"
                     href="#" onClick={(event) => handleNavigation('excluir', event)}>Excluir</a>

                </div>

            </div>
        </header>
    )
}