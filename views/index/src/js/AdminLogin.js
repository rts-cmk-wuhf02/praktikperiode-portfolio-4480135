import React from "react";

import Layout from "./Layout";

const AdminLogin = () => {
    return (
        <Layout
            title="Admin Login"
            slug="admin/login"
            description=""
            keywords={[]}
        >
            <div className="admin-login-container">
                <section>
                    <form action="/api/login" method="POST">
                        <section>
                            <label for="username">Username:</label>
                            <input
                                name="username"
                                id="username"
                                type="text"
                                placeholder="Username"
                                required
                            />
                        </section>

                        <section>
                            <label for="password">Password:</label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </section>

                        <button type="submit">
                            <span>Login</span>
                        </button>
                    </form>
                </section>
            </div>
        </Layout>
    );
};

export default AdminLogin;
