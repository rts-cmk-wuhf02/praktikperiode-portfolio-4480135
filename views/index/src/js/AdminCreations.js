import React, { useState, useLayoutEffect } from "react";

import AdminLayout from "./AdminLayout";
import ValidateAdmin from "./ValidateAdmin";
import CreationCard from "./CreationCard";

const AdminCreations = () => {
    const [creations, setCreations] = useState([]);

    useLayoutEffect(() => {
        if (creations.length == 0) {
            fetch("/api/get/creations")
                .then((response) => response.json())
                .then((data) => {
                    setCreations(data);
                });
        }
    });

    return (
        <AdminLayout
            title="Admin > Creations"
            slug="admin/creations"
            description=""
            keywords={[]}
        >
            <ValidateAdmin>
                <div className="admin-creations-container">
                    <h1>Admin &gt; Creations</h1>

                    <section className="creations-container">
                        {creations.length > 0
                            ? creations.map((creation, i) => {
                                  return (
                                      <div key={i} className="creation-card">
                                          <div className="creation-card-icon">
                                              <img src={creation.image_url} />
                                          </div>
                                          <p>{creation.name}</p>
                                      </div>
                                  );
                              })
                            : null}

                        <div className="creation-card creation-add-card">
                            <div className="creation-card-icon">+</div>
                            <p>Add Creation.</p>
                        </div>
                    </section>
                </div>
            </ValidateAdmin>
        </AdminLayout>
    );
};

export default AdminCreations;
