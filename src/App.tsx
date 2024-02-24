import { Header } from "./components/Header"
import { Products } from "./pages/Products"
import React, { useState } from "react"
import { Sales } from "./pages/Sales";



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
        return <h1>Future implementation</h1>
      case 'sales':
        return <Sales />
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


