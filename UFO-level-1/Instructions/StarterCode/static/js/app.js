// from data.js

var tableData = data;

// get reference to the table body in html
var tbody = d3.select("tbody");

console.log(data);

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

//   get the values from data.js into table
data.forEach(addRow)
function addRow (item,index){
    var row=tbody.append('tr')
    row.append('td').text(item. datetime);
    row.append('td').text(item.city);
    row.append('td').text(item.state);
    row.append('td').text(item.country);
    row.append('td').text(item.shape);
    row.append('td').text(item.durationMinutes);
    row.append('td').text(item.comments);


}
}

function handleClick() {

    
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    // filter data using the input date
    if (date) {
      
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    
    buildTable(filteredData);
  }
  
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
  
  