let movie = [
 {
    title:"Living in bondage",
    genre: "Thriller",
    director: "Ramsey Noah",
  },
  {
    title:"Things Fall Apart",
    genre: "Romance",
    director:"Chiwetalu Agu",

  },
  {
    title:"Nneka the pretty serpent",
    genre: "Romance",
    director:"Kunle Afulayo",
    
  },
  {
    title:"Isakaba",
    genre: "Action",
    director:"Nkem Owoh",

  },
  {
    title:"Glamour Girls",
    genre: "Horror",
    director:"Kemi Adetiba",

  }
];                        
var table = document.createElement("table");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = `${movie[0].title}`;
  cell2.innerHTML = `${movie[0].genre}`;
  cell3.innerHTML = `${movie[0].director}`;
  cell4.innerHTML = `<button onclick="deleteRow(this)">Rent</button>`;

var row1 = table.insertRow(1);
var cell5 = row1.insertCell(0);
var cell6 = row1.insertCell(1);
var cell7 = row1.insertCell(2);
var cell8 = row1.insertCell(3);
 cell5.innerHTML = `${movie[1].title}`;
 cell6.innerHTML = `${movie[1].genre}`;
 cell7.innerHTML = `${movie[1].director}`; 
 cell8.innerHTML = `<td><button onclick="deleteRow(this)">Rent</button></td>`;
      
var row2 = table.insertRow(2);
var cell9 = row2.insertCell(0);
var cell10 = row2.insertCell(1);
var cell11 = row2.insertCell(2);
var cell12 = row2.insertCell(3);
cell9.innerHTML = `${movie[2].title}`;
cell10.innerHTML = `${movie[2].genre}`;
cell11.innerHTML = `${movie[2].director}`; cell12.innerHTML = `<button onclick="deleteRow(this)">Rent</button>`;

var row3 = table.insertRow(3);
var cell13 = row3.insertCell(0);
var cell14= row3.insertCell(1);
var cell15= row3.insertCell(2);
var cell16= row3.insertCell(3);
cell13.innerHTML = `${movie[3].title}`;
cell14.innerHTML = `${movie[3].genre}`;
cell15.innerHTML = `${movie[3].director}`; cell16.innerHTML = `<button onclick="deleteRow(this)">Rent</button>`;

var row4 = table.insertRow(4);
var cell17 = row4.insertCell(0);
var cell18= row4.insertCell(1);
var cell19= row4.insertCell(2);
var cell20= row4.insertCell(3);
cell17.innerHTML = `${movie[4].title}`;
cell18.innerHTML = `${movie[4].genre}`;
cell19.innerHTML = `${movie[4].director}`; cell20.innerHTML = `<button onclick="deleteRow(this)">Rent</button>`;

// to add table to html 
 document.querySelector("#mytabs").appendChild(table);

// to delete rented movies from the table
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.querySelector("table").deleteRow(i);
  alert("MOVIE RENTED")
}

// To search through movies
  document.querySelector("#mine").onkeypress =  function() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.querySelector("#mine");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

