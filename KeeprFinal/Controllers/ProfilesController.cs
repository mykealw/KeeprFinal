using System;
using KeeprFinal.Models;
using KeeprFinal.Services;
using Microsoft.AspNetCore.Mvc;

namespace KeeprFinal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfilesController : ControllerBase
    {
        private readonly AccountService _accts;
        private readonly ProfilesService _ps;

        public ProfilesController(AccountService accts, ProfilesService ps)
        {
            _accts = accts;
            _ps = ps;
        }
        //GETS
        [HttpGet("{id}")]
        public ActionResult<Profile> GetById(string id)
        {
            try
            {
                Profile profile = _ps.GetById(id);
                return Ok(profile);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        //Posts



        //puts


        //Deletes
    }
}