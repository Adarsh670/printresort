import React, { useEffect, useState } from "react";
import "./jobdata.css";
import { Link } from "react-router-dom";
const JobData = () => {
  const [formData, setFormData] = useState();
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/f73b86ca-8311-44c8-ad7f-c42588fa93b1?_format=index"
      );
      const data = await res.json();
      
      setFormData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="container formData p-0">
          <div className="formTitle ">
            <h2>Job Details</h2>
          </div>
          <div className="DataTable">
            <div className="table-responsive">
              <table className="table table-bordered border-primary">
                <thead>
                  <tr>
                    <th scope="col">Job-No</th>
                    <th scope="col">Client_Name</th>
                    <th scope="col">Client_Mobile</th>
                    <th scope="col" className="dateHeading">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>

                    <th scope="col">Price</th>

                    <th scope="col">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Job_Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th scope="col">Payment</th>
                    <th scope="col">
                      Job_Desc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>
                    <th scope="col">Plate</th>
                    <th scope="col">No_of_Page</th>
                    <th scope="col">Job_in_Color</th>
                    <th scope="col">Final_Size</th>
                    <th scope="col">Final_Qty</th>
                    <th scope="col">Lamination</th>
                    <th scope="col">Varnish</th>
                    <th scope="col">UV</th>
                    <th scope="col">Die_Cutting</th>
                    <th scope="col">Paper</th>
                    <th scope="col">Extra_Fabrication</th>
                    <th scope="col">Binding</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData?.map((item, i) => (
                    <tr key={i} className="adi">
                      <th scope="row">{i}</th>
                      <td>{item.Client_Name}</td>
                      <td>{item.Client_Mobile}</td>
                      <td>{item.Date}&nbsp;&nbsp;&nbsp;</td>
                      <td>{item.Price}</td>
                      <td>{item.Job_Name}</td>
                      <td>{item.Payment}</td>
                      <td>{item.Job_Description}</td>
                      <td>{item.Plate}</td>
                      <td>{item.No_of_Page}</td>
                      <td>{item.Job_in_Color}</td>
                      <td>{item.Finalsize}</td>
                      <td>{item.Final_Quantity}</td>
                      <td>{item.Lamination}</td>
                      <td>{item.Varnish}</td>
                      <td>{item.Uv}</td>
                      <td>{item.Die_Cutting}</td>
                      <td>{item.Paper}</td>
                      <td>{item.Extra_Fabrication}</td>
                      <td>{item.Binding}</td>
                      <td>{item.Status}</td>
                      <td>
                        <Link to={`/jobEdit/${i}`}>
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobData;
