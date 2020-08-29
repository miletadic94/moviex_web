import React, { Fragment, useState, useEffect } from "react";
import ActivateUserToggler from "../../screens/admin/UserManagement/ActivateUserToggler";
import { formatDate } from "../../services/dateTime.service";
import Pagination from "./Pagination";

function renderTableCell(value, type) {
  if (typeof value === "object" && Array.isArray(value)) {
    return (
      <td key={value.id} className="p-1" style={{ width: 200 }}>
        {value.map((item) => (
          <span key={item.id} className="badge badge-pill badge-info mr-1">
            {item.name}
          </span>
        ))}
      </td>
    );
  }
  return <td key={value}>{type === "date" ? formatDate(value) : value}</td>;
}

const Table = ({
  headerItems,
  data,
  editAction,
  activateAction,
  addProductAction,
}) => {
  if (!data || data.length === 0) return "No Data";
  const [state, setState] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("current Page", currentPage);
    paginateData(currentPage);
    return () => {
      setState([]);
    };
  }, [currentPage]);

  // useEffect(() => {
  //   paginateData(1);
  //   return () => {
  //     setState([]);
  //   };
  // }, []);

  const paginateData = (page) => {
    const begin = (page - 1) * 10;
    const end = begin + 10;
    const state = data.slice(begin, end);
    setState(state);
  };
  return (
    <Fragment>
      <table className="table table-striped">
        <thead>
          <tr>
            {headerItems.map(({ key, label }) => (
              <th key={key}>{label}</th>
            ))}
            {!!editAction && <th className="text-center">Edit</th>}
            {!!activateAction && <th className="text-center">Activate</th>}
            {!!addProductAction && <th className="text-center">Add Product</th>}
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => (
            <tr key={index}>
              {headerItems.map(({ key, type }) =>
                renderTableCell(item[key], type)
              )}
              {!!editAction && (
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-outline-info"
                    onClick={() => editAction(item["id"])}
                  >
                    Edit
                  </button>
                </td>
              )}
              {!!activateAction && item && (
                <ActivateUserToggler id={item["id"]} user={item} />
              )}
              {!!addProductAction && item && (
                <td className="text-center">
                  <i
                    onClick={() => addProductAction(item["id"])}
                    className="fas fa-plus-square"
                  ></i>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getData={paginateData}
      />
    </Fragment>
  );
};

export default Table;
