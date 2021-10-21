import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addUser} from "../../Redux/Actions/userAction"

const AddUSer = () => {
  const dispatch = useDispatch();  
  const history = useHistory()
  return (
    <div className="container">
      <div className="row">
        <div className="card my-4" style={{height:'100%'}}>
          <div className="card-body">
            <Formik
              initialValues={{
                id: Math.floor(1000 + Math.random() * 9000),
                name: "",
                email: "",
                gender: "",
                status:"active"
              }}
              onSubmit={(values) => {
                dispatch(addUser(values,history));
              }}
            >
              <Form>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                   Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="NAme"
                    
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                   Email
                  </label>
                  <Field
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    
                  />
                  
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                   Gender
                  </label>
                  <Field
                    className="form-control"
                    id="gender"
                    name="gender"
                    type="text"
                    placeholder="Gender"
                    
                  />
                  
                </div>
                <button className="btn btn-primary">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUSer;
