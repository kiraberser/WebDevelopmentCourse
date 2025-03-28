import { Button } from "./Button";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

const url = "https://fakestoreapi.com/products"

interface Product {
    id: number;
    title: string;
    price: number;
}

const Products = () => {
    const { data, error, loading, refetch} = useFetch<Product[]>(url)
    const [showProducts, setShowProducts] = useState(false)

    const reloadData = () => {
        setShowProducts(true)
        refetch()
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                {!showProducts ? "Haz clic en el botón para cargar los productos" : "Lista de Productos"}
            </h1>

            {loading && <p className="text-center text-blue-500">Cargando productos...</p>}
            {error && <p className="text-center text-red-500">{error.message}</p>}

            {!loading && showProducts && data && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg">
                            <h2 className="font-semibold text-lg">{product.title}</h2>
                            <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center mt-6 gap-4">
                {!showProducts && <Button label="Reload Products" parentMethod={reloadData} />}
                {showProducts && <Button label="Hide Products" parentMethod={() => setShowProducts(false)} />}
            </div>
        </div>
    );
};

export default Products;
