import axios from 'axios';
import styles from './RenewPlanForm.module.css';

const RenewPlan = () => {
    const handleRenewPlan = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const selectedPlan = formData.get('renewPlan');
        const renewalDate = formData.get('renewalDate');
        console.log('Renew Plan:', selectedPlan);
        console.log('Renewal Date:', renewalDate);
        try {
            const response = await axios.patch("http://localhost:4000/api/customers/9da6827a-0e26-45f4-91aa-cab5d12a4b5f/renew-plan", {
                renewal_date: renewalDate, planStatus: selectedPlan
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            e.target.reset();
        }
    };
    return (
        <>
            <h2 className={styles.heading}>Renew Plan</h2>
            <form className={styles.form_container} onSubmit={handleRenewPlan}>
                <div className="form-group">
                    <label htmlFor="renewalDate">Renewal Date:</label>
                    <input type="date" id="renewalDate" name="renewalDate" />
                </div>
                <div className="form-group">
                    <label htmlFor="planStatus">Plan Status:</label>
                    <select id="planStatus" name="planStatus">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <button className={styles.submit} type="submit">Renew</button>
            </form>
        </>
    );
};

export default RenewPlan;
