import React, { useLayoutEffect, useState, useContext } from "react";

import Layout from "./Layout";
import ValidateAdmin from "./ValidateAdmin";

const Admin = () => {
    return (
        <Layout title="Admin" slug="admin" description="" keywords={[]}>
            <ValidateAdmin>
                <p>You are now on the admin page.</p>
            </ValidateAdmin>
        </Layout>
    );
};

export default Admin;
