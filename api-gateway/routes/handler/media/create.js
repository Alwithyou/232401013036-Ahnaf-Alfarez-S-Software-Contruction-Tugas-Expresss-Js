const apiAdapter = require('../../apiAdaptor');
const {
    URI_SERVICE_MEDIA
} = process.env;

const api = apiAdapter(URI_SERVICE_MEDIA);

module.exports = async (req, res) => {
    try {
        const media = await api.post('/media', req.body);
        return res.json({data: media.data});
    } catch (error) {
        
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({
                status: 'error',
                message: 'Service media unavailable'
            });
        }


        const { status, data } = error.response;
        return res.status(status).json(data);
    }
    
}