const btnGenereta = document.querySelector('#generate-pdf');

btnGenereta.addEventListener('click', () =>{

//Contéudo do PDF
const content = document.querySelector("#content")

//Configuração do arquivo final de PDF
const options = {
    marginTop:[10,10,10,10],
    filename: "Arquivo.pdf",
    html2canvas: {scale: 2},
    jsPDF: {until: "mm", format: "a4", orientation: "portrait"}
}

//gerar e baixar o PDF
html2pdf().set(options).from(content).save();    

});