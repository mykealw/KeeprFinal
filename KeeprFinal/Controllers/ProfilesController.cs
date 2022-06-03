using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KeeprFinal.Services;
using Microsoft.AspNetCore.Mvc;

namespace KeeprFinal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfilesController : ControllerBase
    {
        private readonly AccountService _accts;

        public ProfilesController(AccountService accts)
        {
            _accts = accts;
        }
    }
}