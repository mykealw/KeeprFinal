using System;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using KeeprFinal.Models;
using KeeprFinal.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KeeprFinal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VaultKeepsController : ControllerBase
    {
        private readonly VaultKeepsService _vks;

        public VaultKeepsController(VaultKeepsService vks)
        {
            _vks = vks;
        }
        //GETS

        //POSTS
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<VaultKeep>> Create([FromBody] VaultKeep vaultKeepData)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                if (userInfo == null)
                {
                    throw new Exception("log in to do things");
                }
                vaultKeepData.CreatorId = userInfo.Id;
                vaultKeepData.Creator = userInfo;
                VaultKeep vaultKeep = _vks.Create(vaultKeepData, userInfo?.Id);
                if (vaultKeep.Creator == null)
                {
                    throw new Exception("log in to do things");
                }
                return Ok(vaultKeep);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        //DELETES
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<String>> Delete(int id)
        {
            try
            {
                Profile profile = await HttpContext.GetUserInfoAsync<Account>();
                _vks.Delete(id, profile.Id);
                return Ok("Deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}