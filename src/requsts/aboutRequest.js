import ApiRequest from "./baseRequsts.js";
import { ABOUT_ENDPOINT } from "../urlHalper.js";




const _service = new ApiRequest()


export const getAboutData = async () => {
    const response = await _service.get(ABOUT_ENDPOINT);
    console.log(response);
    return await response.json();

}