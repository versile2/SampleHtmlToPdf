

using Microsoft.AspNetCore.Mvc;

namespace SampleHtmlToPdf.Controllers
{
    public class HomeController : Controller
    {

        public HomeController()
        {
            
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        public IActionResult HtmlToPdf(string html)
        {
            //PdfDocument pdf = TheArtOfDev.HtmlRenderer.PdfSharp.PdfGeneratePdf(html, PdfSharp.PageSize.Letter);
            return View();
        }
    }
}
