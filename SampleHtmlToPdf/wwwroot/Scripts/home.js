document.addEventListener('DOMContentLoaded', function () {
    const printButton = document.getElementById('PrintDetailsBtn');
    if (printButton) {
        printButton.addEventListener('click', exportToPDF);
    } else {
        console.error('Print button not found');
    }
});

function exportToPDF() {
    console.log('exportToPDF function called');
    const element = document.querySelector('.pdf-wrapper');
    if (!element) {
        console.error('PDF wrapper element not found');
        return;
    }
    console.log('PDF wrapper element found');

    const footerText = "testText"; // This is the variable for the custom text

    const opt = {
        margin: [10, 10, 20, 10], // Increased bottom margin to accommodate footer
        filename: 'exported_document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            logging: true,
            allowTaint: true,
            removeContainer: true,
            letterRendering: true
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
        enableLinks: true
    };

    let totalPages;

    html2pdf().set(opt).from(element).toPdf().get('pdf').then((pdf) => {
        totalPages = pdf.internal.getNumberOfPages();

        // Add footer to each page
        for (let i = 1; i <= totalPages; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor(150);

            // Add custom text to the left
            pdf.text(footerText, 10, pdf.internal.pageSize.getHeight() - 25);

            // Add page numbers to the right
            pdf.text(`Page ${i} of ${totalPages}`, pdf.internal.pageSize.getWidth() - 10, pdf.internal.pageSize.getHeight() - 25, { align: 'right' });
        }
    }).save().then(function () {
        console.log('PDF generated and saved successfully');
    }).catch(function (error) {
        console.error('Error generating PDF:', error);
        if (error.stack) {
            console.error('Error stack:', error.stack);
        }
    });
}
