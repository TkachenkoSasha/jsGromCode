function getCustomersList(arr){
    return Object.entries(arr)
    .map(el => {el[1]['id'] = el[0]; return el[1];})
    .sort(function(el1, el2){return el1.age - el2.age});
}