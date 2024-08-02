# Sample Project using HtmlToPdf
Found this great javascript library that is a wrapper for jsPDF that handles Html to PDF generation completely. 

## Features
- .NET 6
- ASP.NET MVC Setup
- No extras, no libraries other than what comes in a base mvc project for .net 6
- Using [Html2Pdf.js](https://github.com/eKoopmans/html2pdf.js) exclusively.

## Background

I simply needed to find the easiest cost-free solution for integration of Html to a PDF using Html styles. Kendo's version which I had a license for was way too
clunky. Additionally I was not able to reliably size a page inside the print view. There were two lost benefits from using Kendo's built in pdf conversion. The first
was the ability to select/copy text in the pdf. The second was the ability to name the pdf while forcing it to open in browser (Html2Pdf.js sets the name as just download).
This worked flawlessly, took very little time to customize and will adjust based on my content. 

## Concerns

If you have any comments, concerns, or this helped you feel free to leave an issue or discussion.

Thanks,
V
