import React from "react";

import AdminLayout from "./AdminLayout";
import ValidateAdmin from "./ValidateAdmin";

const AdminCreations = () => {
    return (
        <AdminLayout
            title="Admin::Creations"
            slug="admin/creations"
            description=""
            keywords={[]}
        >
            <ValidateAdmin>
                <h1>Admin::Creations</h1>
            </ValidateAdmin>
        </AdminLayout>
    );
};

export default AdminCreations;
