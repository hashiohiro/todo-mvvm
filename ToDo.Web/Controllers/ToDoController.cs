using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ToDo.Web.Controllers
{
    public class ToDoController : Controller
    {
        private readonly ILogger<ToDoController> _logger;

        public ToDoController(ILogger<ToDoController> logger)
        {
            _logger = logger;
        }

        public IActionResult ToDoList()
        {
            return View();
        }

        public IActionResult ToDoDetail()
        {
            return View();
        }
    }
}
