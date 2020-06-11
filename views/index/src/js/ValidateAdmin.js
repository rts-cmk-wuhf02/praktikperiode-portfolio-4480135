import React, { useLayoutEffect, useState } from "react";
import { redirectTo } from "@reach/router";

const ValidateAdmin = (props) => {
    const [validAdmin, setValidAdmin] = useState({ valid: undefined });

    useLayoutEffect(() => {
        if (validAdmin.valid == undefined) {
            fetch("/api/validate", { method: "POST" })
                .then((response) => response.json())
                .then((data) => {
                    setValidAdmin(data);
                });
        }
    });

    return validAdmin.valid ? (
        props.children
    ) : validAdmin.valid == undefined ? (
        <div>Loading...</div>
    ) : (
        redirectTo("/admin/login")
    );
};

export default ValidateAdmin;
