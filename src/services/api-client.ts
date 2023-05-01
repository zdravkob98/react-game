import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dd7ec2ae50634009945cb46323f004ed'
    }
})