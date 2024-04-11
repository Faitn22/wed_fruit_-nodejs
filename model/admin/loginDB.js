
const connection = require('../../connectDB');

function selectLogin(result, tk, mk) {
    connection.query(
        'SELECT * FROM `taikhoan_admin` WHERE TenTK = ? AND MatKhau = SHA2(?, 256)', [tk, mk],
        function (err, results) {
            if (err) throw err;
            return result(results);
        }
    );
}

module.exports = { selectLogin };