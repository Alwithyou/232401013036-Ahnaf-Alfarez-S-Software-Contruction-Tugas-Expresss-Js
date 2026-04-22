const { User, RefreshToken } = require('../../../models');

module.exports = async (req, res) => {
    const userId = req.body.userId;

    if (!userId) {
        return res.status(400).json({
            status: 'error',
            message: 'userId is required'
        });
    }

    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
    }

    await RefreshToken.destroy({
        where: {
            user_id: userId
        }
    });

    return res.json({
        status: 'success',
        message: 'User logged out successfully'
    });
};
