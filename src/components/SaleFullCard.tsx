// export const SaleFullCard = () => {
//     return (
//         <div className="px-4 py-8 max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 md:ml-8">
//             <div className="flex items-center flex-col-reverse mb-4">
//                 <h2 className="text-2xl font-bold text-mclarenBlueTxt"> Data da venda </h2>
//                 <span className="text-lg font-medium text-mclarenBlueTxt"> SaleId: 1111</span>
//             </div>

//         </div>
//     )
// }

export const SaleFullCard = () => {
    return (
        <div className="px-4 py-8 max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 md:ml-8 flex flex-col justify-between">
            <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-mclarenBlueTxt"> Data: </h2>
                <span className="text-lg font-medium text-mclarenBlueTxt"> SaleId: 1111</span>
                <span className="text-lg font-medium text-mclarenBlueTxt"> ProductId: </span>
                <span className="text-lg font-medium text-mclarenBlueTxt"> Quantidade: </span>
            </div>
        </div>
    )
}
