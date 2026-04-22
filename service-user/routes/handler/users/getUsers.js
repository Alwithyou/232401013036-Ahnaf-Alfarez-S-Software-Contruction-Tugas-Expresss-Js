const { User } = require('../../../models');

module.exports = async (req, res) => {
    const userIds = req.query.userIds || [];

    const sqloptions = {
        attributes: ['id', 'email', 'name', 'professions', 'role', 'avatar']
    }

    if (userIds.length) {
        sqloptions.where = {
            id: userIds
        }
    }

    const id = req.params.id;

    const user = await User.findAll(sqloptions);

    return res.json({
        status: 'success',
        data: user
    });
}