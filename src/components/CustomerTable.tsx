import axios from "axios";
import { useEffect, useState } from "react";

import styles from './CustomerTable.module.css';

const CustomerTable = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div>
            <h2 className={styles.heading}>Customer Table</h2>
            <table className={styles.customer_table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Adhar Number</th>
                        <th>Registration Date</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer: any, index) => (
                        <tr key={index}>
                            <td>{customer.name}</td>
                            <td>{customer.dob}</td>
                            <td>{customer.email}</td>
                            <td>{customer.aadhaar}</td>
                            <td>{customer.reg_date}</td>
                            <td>{customer.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;