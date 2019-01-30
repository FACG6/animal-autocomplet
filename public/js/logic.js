const filterFile = (response, data) => {
    let filterData = {};
    for (let key in response) {
        if (key.toUpperCase().indexOf(data.toUpperCase()) !== -1) {
            filterData[key] = response[key];
        }
    }
    return filterData;
}
const description = (key)=>key.description;
const img = (key)=>key.image;

module.exports = {filterFile,description,img};