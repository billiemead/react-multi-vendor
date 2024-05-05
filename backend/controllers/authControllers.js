const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utilities/response");
const bcrypt = require('bcrypt');
const { createToken } = require("../utilities/tokenCreate");

class authControllers {
    admin_login = async (req, res) => { // admin_login method
        // console.log(req.body);
        const { email, password } = req.body;
        try {
            const admin = await adminModel.findOne({ email }).select('+password');
            // console.log(admin);
            if (admin) {
                const match = await bcrypt.compare(password, admin.password);
                // console.log(match);
                if (match) {
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    });
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days expiry time in millisecond
                    });
                    responseReturn(res, 200, { token, message: "Login Successful!" });
                } else {
                    responseReturn(res, 404, { error: "Incorrect Password" });
                }
            } else {
                responseReturn(res, 404, { error: "Email not Found" });
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message });
        }
    } // End admin_login method
    get_user = async (req, res) => { // get_user method
        const { id, role } = req;
        try {
            if (role === 'admin') {
                const user = await adminModel.findById(id);
                responseReturn(res, 200, { userInfo : user })
            } else {
                console.log('Seller Info');
            }
        } catch (error) {
            console.log(error.message);
        }
    } // End get_user method
}

module.exports = new authControllers();