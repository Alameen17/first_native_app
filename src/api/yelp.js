import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Si6scbkXxLoqWFZtknR8PqZ80l_PZounQFI9xsPgMH4dVeOlgbVU3DNjyuOGP8P3zphrwQRQXrKCPdxbgxSlQDrgmyzL6NsyVL3iRf05BZ2itW36mozUPVBoU7a6Y3Yx'
    }
});
