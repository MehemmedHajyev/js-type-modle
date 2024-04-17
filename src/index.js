
import { getAboutData } from "./requsts/aboutRequest.js"

import { bindingAboutData } from "./creators/aboutCreater.js";
async function loadPage() {
    await loadAboutData()

}



async function loadAboutData() {
    const data = await getAboutData()
    bindingAboutData(data)
    console.log(data)
}

document.addEventListener('DOMContentLoaded', loadPage)