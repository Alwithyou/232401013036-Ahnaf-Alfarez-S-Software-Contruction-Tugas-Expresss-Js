const { RefreshToken } = require('../../../models');

module.exports = async (req, res) => {
    const refreshToken = req.query.refreshToken;

    // 1. Validasi input
    if (!refreshToken) {
        return res.status(400).json({
            status: 'error',
            message: 'refreshToken is required'
        });
    }

    // 2. Cari di database
    const tokenData = await RefreshToken.findOne({
        where: {
            tokens: refreshToken
        }
    });

    // 3. Jika tidak ditemukan
    if (!tokenData) {
        return res.status(404).json({
            status: 'error',
            message: 'Refresh token not found'
        });
    }

    // 4. Response sukses
    return res.json({
        status: 'success',
        data: tokenData
    });
};
