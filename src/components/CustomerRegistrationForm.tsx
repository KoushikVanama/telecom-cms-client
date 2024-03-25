import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';

import styles from './CustomerRegistrationForm.module.css';
import CustomerTable from './CustomerTable';
import PlanSelectionForm from './PlanSelectionForm';
import RenewPlan from './RenewPlanForm';

const CustomerRegistrationForm = () => {
    const initialValues = {
        name: '',
        dob: '',
        email: '',
        aadhaar: '',
        registrationDate: '',
        mobile: '',
    };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Customer name is required'),
        dob: Yup.string().required('DOB is required'),
        email: Yup.string().required('Email is required'),
        aadhaar: Yup.number().required('Aadhaar is required'),
        registrationDate: Yup.string().required('Registration date is required'),
        mobile: Yup.string().matches(phoneRegExp, 'Mobile number is not valid').required("Mobile number is required"),
    });

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        const {
            name,
            dob,
            email,
            aadhaar,
            registrationDate,
            mobile
        } = values;
        try {
            const response = await axios.post("http://localhost:4000/api/customers/register", {
                name, dob, email, aadhaar, reg_date: registrationDate, mobile
            });
            console.log(values);
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <>
            <h3 className={styles.heading}>Customer Registration Form</h3>
            <div className={styles.form_container}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor='name'>Customer name:</label>
                                <Field type="text" name="name" />
                                <ErrorMessage name='name' component="div" className={styles.error} />
                            </div>
                            <div>
                                <label htmlFor="dob">Date of Birth</label>
                                <Field type="date" name="dob" />
                                <ErrorMessage name="dob" component="div" className={styles.error} />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" className={styles.error} />
                            </div>
                            <div>
                                <label htmlFor="aadhaar">Aadhaar Number</label>
                                <Field type="text" name="aadhaar" />
                                <ErrorMessage name="aadhaar" component="div" className={styles.error} />
                            </div>
                            <div>
                                <label htmlFor="registrationDate">Registration Date</label>
                                <Field type="date" name="registrationDate" />
                                <ErrorMessage name="registrationDate" component="div" className={styles.error} />
                            </div>
                            <div>
                                <label htmlFor="mobile">Mobile Number</label>
                                <Field type="text" name="mobile" />
                                <ErrorMessage name="mobile" component="div" className={styles.error} />
                            </div>
                            <button type="submit" disabled={isSubmitting} className={styles.submit}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            <CustomerTable />
            <PlanSelectionForm />
            <RenewPlan />
        </>
    );
}

export default CustomerRegistrationForm;
