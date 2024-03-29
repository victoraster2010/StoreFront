import { Header } from "./components/Header"
import { Products } from "./pages/Products"
import React, { useState } from "react"
import { Sales } from "./pages/Sales";
import { CreateProduct } from "./pages/CreateProduct";
import { CreateSale } from "./pages/CreateSale";
import { DeleteProduct } from "./pages/DeleteProduct";
import { UpdateProducts } from "./pages/UpdateProducts";



interface Props {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export function App() {

  const [page, setPage] = useState<string>("products");
  const renderPage = () => {
    switch (page) {
      case 'products':
        return <Products />
      case 'excluir':
        return <DeleteProduct />
      case 'sales':
        return <Sales />
      case 'create-product':
        return <CreateProduct />
      case 'create-sale':
        return <CreateSale />
      case 'update-products':
        return <UpdateProducts />
      default:
        return <h1>Not found</h1>
    }
  }

  return (
    <>
      <Header setPage={setPage} />
      {renderPage()}
    </>
  )
}


