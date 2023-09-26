var data = JSON.parse(localStorage.getItem("dataOfProduct"));

displydata(data)
document.querySelector("#sort").addEventListener("change", handlesort);
document.querySelector('#sortQty').addEventListener('change'qty);
function handlesort() {
  var selected = document.querySelector("#sort").value;

  if (selected == "asc") {
    data.sort(function (a, b) {
      if (a.proName > b.proName) return 1;
      if (a.proName < b.proName) return -1;
      return 0;
    });
}
  if (selected == "dsc") {
    data.sort(function (a, b) {
      if (a.proName > b.proName) return -1;
      if (a.proName < b.proName) return 1;
      return 0;
    });
  }
  displydata(data)
}
function displydata(data)
{
    document.querySelector('tbody').innerHTML=''
data.forEach(function (ele) {
  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = ele.proName;
  var td2 = document.createElement("td");
  td2.innerText = ele.proQty;
  var td3 = document.createElement("td");
  td3.innerText = ele.proPrio;
  var td4 = document.createElement("td");
  td4.style.color = "red";
  td4.style.cursor = "pointer";
  td4.innerText = "completed";
  td4.addEventListener("click", function () {
    toCompleteData(ele);
  });

  tr.append(td1, td2, td3, td4);
  document.querySelector("#body").append(tr);
});
}
var complete = JSON.parse(localStorage.getItem("completed")) || [];
function toCompleteData(ele) {
  complete.push(ele);
  localStorage.setItem("completed", JSON.stringify(complete));
}
