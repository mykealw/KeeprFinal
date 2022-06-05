using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
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

        //relationships
        [HttpGet("{id}/keeps")]
        public ActionResult<List<Keep>> GetProfileKeeps(string id)
        {
            try
            {
                List<Keep> keeps = _ps.GetProfileKeeps(id);
                return Ok(keeps);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/vaults")]
        public async Task<ActionResult<List<Vault>>> GetProfileVaults(string id)
        {
           try
           {
               Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
               List<Vault> vaults = _ps.GetProfileVaults(id, userInfo?.Id);
               return Ok(vaults);
           }
           catch(Exception e)
           {
               return BadRequest(e.Message);
           }
        }

        //Posts

        //puts

        //Deletes
    }
}