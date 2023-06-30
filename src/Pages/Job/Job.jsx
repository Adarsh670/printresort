import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./job.css";
const Add = () => {
  const form = useRef();
  const [data, setData] = useState({
   jobNo: "",
    Client_Name: "",
    Client_Mobile: "",
    Date: "",
    Price:"",
    Job_Name: "",
    Payment: "",
    Job_Description: "",
    Plate: "",
    No_of_Page: "",
    Job_in_Color: "",
    Finalsize: "",
    Final_Quantity: "",
    Lamination: "",
    Varnish: "",
    UV: "",
    Die_Cutting: "",
    Paper: "",
    Extra_Fabrication: "",
    Binding: "",
    Status: "Pending",
  });

  const {
    jobNo,
    Client_Name,
    Client_Mobile,
    Date,
    Price,
    Job_Name,
    Payment,
    Job_Description,
    Plate,
    No_of_Page,
    Job_in_Color,
    Finalsize,
    Final_Quantity,
    Lamination,
    Varnish,
    UV,
    Die_Cutting,
    Paper,
    Extra_Fabrication,
    Binding,
    Status,
  } = data;
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/f73b86ca-8311-44c8-ad7f-c42588fa93b1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        alert("Form is submitted successfully");
      }
    } catch (error) {
      console.log(error);
    }
    setData({
      ...data,
      jobNo: "",
      Client_Name: "",
      Client_Mobile: "",
      Date: "",
      Price: "",
      Job_Name: "",
      Payment: "",
      Job_Description: "",
      Plate: "",
      No_of_Page: "",
      Job_in_Color: "",
      Finalsize: "",
      Final_Quantity: "",
      Lamination: "",
      Varnish: "",
      UV: "",
      Die_Cutting: "",
      Paper: "",
      Extra_Fabrication: "",
      Binding: "",
      Status: "",
    });
    
    // email
    emailjs
      .sendForm(
        "service_z0omjve",
        "template_lekg1yp",
        form.current,
        "qwd0wXcZU7_ESMqon"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container-fluid p-0">
      <div className="job-banner">
        <h2>JOB ORDER</h2>
      </div>
      <div className="job-form">
        <div className="container">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 box">
                <div className="jobNo">
                  <label>Job No. (required)</label>
                  <input
                    type="text"
                    value={jobNo}
                    onChange={handleChange}
                    name="jobNo"
                  />
                </div>
              </div>
              <div className="col-lg-5 box">
                <div className="clientName">
                  <label> Client Name (required)</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={Client_Name}
                    name="Client_Name"
                    required
                  />
                </div>
                <br />
                <div className="clientMobile ">
                  <label> Client Mobile (required)</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={Client_Mobile}
                    name="Client_Mobile"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-3 box">
              <div className="Date">
                  <label> Date (required)</label>
                  <input
                    type="date"
                    value={Date}
                    onChange={handleChange}
                    name="Date"
                    required
                  />
                </div>
                <br />
                <div className="clientMobile ">
                  <label> Price (required)</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={Price}
                    name="Price"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Job Name (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Job_Name}
                    onChange={handleChange}
                    name="Job_Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>No. of Pages (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={No_of_Page}
                    onChange={handleChange}
                    name="No_of_Page"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Job Description (required)</label>
                </div>
                <div className="col-lg-8 box">
                  <textarea
                    id=""
                    value={Job_Description}
                    onChange={handleChange}
                    name="Job_Description"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Job in Color (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Job_in_Color}
                    onChange={handleChange}
                    name="Job_in_Color"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Lamination (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Lamination}
                    onChange={handleChange}
                    name="Lamination"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Varnish (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Varnish}
                    onChange={handleChange}
                    name="Varnish"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>UV / Foiling (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={UV}
                    onChange={handleChange}
                    name="UV"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Die Cutting (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Die_Cutting}
                    onChange={handleChange}
                    name="Die_Cutting"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Binding (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Binding}
                    onChange={handleChange}
                    name="Binding"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Extra Fabrication (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Extra_Fabrication}
                    onChange={handleChange}
                    name="Extra_Fabrication"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Payment (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Payment}
                    onChange={handleChange}
                    name="Payment"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Plate (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Plate}
                    onChange={handleChange}
                    name="Plate"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Final Size (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Finalsize}
                    onChange={handleChange}
                    name="Finalsize"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Final Quantity (required)</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input
                    type="text"
                    value={Final_Quantity}
                    onChange={handleChange}
                    name="Final_Quantity"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Paper (required)</label>
                </div>
                <div className="col-lg-8 box">
                  <textarea
                    onChange={handleChange}
                    name="Paper"
                    value={Paper}
                    id=""
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="col-12 jobformstatus">
              <div className="row">
                <div className="col-lg-4 box">
                  <label>Status</label>
                </div>
                <div className="col-lg-8 box    ">
                  <input type="text" value={Status} name="Pending" />
                </div>
              </div>
            </div>

            <div className="job-btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
