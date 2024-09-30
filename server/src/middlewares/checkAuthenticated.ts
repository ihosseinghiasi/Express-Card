import { getUserById } from "../models/user"
import { getAdminById } from "../models/admin"
import jwt from "jsonwebtoken"


// module.exports.checkUser = (req, res, next) => {
//   const token = req.cookies.comercial;
//   if (token) {
//     jwt.verify(
//       token,
//       "nodejs is program language",
//       async (err, decodedToken) => {
//         if (err) {
//           res.json({ status: false });
//           next();
//         } else {
//           const user = await User.findById(decodedToken.id);
//           if (user) {
//             res.json({ status: true, userType: "user", person: user });
//           } else {
//             const admin = await Admin.findById(decodedToken.id);
//             if (admin) {
//               res.json({ status: true, userType: "admin", person: admin });
//             } else {
//               res.json({ status: false })
//             }
//             next();
//           }
//         }
//       }
//     );
//   } else {
//     res.json({ status: false });
//     next();
//   }
// };