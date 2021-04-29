
function createPDF() {
    
    if (document.getElementById("name").value == " "|| document.getElementById("country").value== " ") {
        alert("Please fill up all the fields")
    }
    else{
        
        var doc = new jsPDF()

        doc.text(document.getElementById("name").value,10,10)
        doc.text(document.getElementById("country").value,25,25)


        doc.save("output.pdf")
    }
}