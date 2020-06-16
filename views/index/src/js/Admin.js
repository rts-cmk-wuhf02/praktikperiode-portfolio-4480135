import React from "react";

import AdminLayout from "./AdminLayout";
import ValidateAdmin from "./ValidateAdmin";

const Admin = () => {
    return (
        <AdminLayout title="Admin" slug="admin" description="" keywords={[]}>
            <ValidateAdmin>
                <h1>Administration</h1>
            </ValidateAdmin>
        </AdminLayout>
    );
};

export default Admin;
