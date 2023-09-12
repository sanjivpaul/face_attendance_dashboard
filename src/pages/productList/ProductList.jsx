import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        // filter will check all the data are present and if given id will match with data it will delete it
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: "product",
            headerName: 'Product',
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="tableProductList">
                        <img src={params.row.img} alt="" className="tableProductListImg" />
                        {params.row.name}
                    </div>
                );
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            // by using renderCell we can pass a arrow functions
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListBtnEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListBtnDeleteIcon"
                            onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            }
        },
    ];


    return (
        <div className="productList">
            <DataGrid
                // this data is come from useState
                rows={data}
                columns={columns}
                pageSize={7}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
