var completeData = JSON.parse(localStorage.getItem("completed")) || []


completeData.map(function(ele){
    var tr = document.createElement('tr')

    var td1 = document.createElement('td')
    td1.innerText = ele.proName
    var td2 = document.createElement('td')
    td2.innerText = ele.proQty
    var td3 = document.createElement('td')
    td3.innerText = ele.proPrio

    tr.append(td1,td2,td3)

    document.querySelector("#body").append(tr)
})


