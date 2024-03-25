import axios from 'axios';
import styles from './PlanSelectionForm.module.css';

const PlanSelectionForm = () => {
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const selectedPlan = formData.get('plan');
        const planStatus = formData.get('planStatus');
        const planCost = formData.get('planCost');
        const planValidity = formData.get('planValidity');
        try {
            // const response = await axios.post(`http://localhost:4000/api/customers/${id}/assign-plan`, {
            const response = await axios.post(`http://localhost:4000/api/customers/53b79e45-525a-43e4-bb3a-1835bc25eb7e/assign-plan`, {
                "name": selectedPlan,
                "cost": planCost,
                "validity": planValidity,
                "status": planStatus
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            e.target.reset();
        }
    };

    return (
        <div className={styles.form_container}>
            <h2>Plan Selection</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="plan">Select Plan:</label>
                    <select id="plan" name="plan">
                        <option value="Platinum365">Platinum (365 days)</option>
                        <option value="Gold180">Gold (180 days)</option>
                        <option value="Silver90">Silver (90 days)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="planValidity">Validity:</label>
                    <select id="planValidity" name="planValidity">
                        <option value="365">365</option>
                        <option value="180">180</option>
                        <option value="90">90</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="planCost">Cost:</label>
                    <select id="planCost" name="planCost">
                        <option value="499">499</option>
                        <option value="299">299</option>
                        <option value="199">199</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="planStatus">Plan Status:</label>
                    <select id="planStatus" name="planStatus">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <button type="submit" className={styles.submit}>Submit</button>
            </form>
        </div>
    );
};

export default PlanSelectionForm;
