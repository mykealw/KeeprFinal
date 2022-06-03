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
    public class VaultsController : ControllerBase
    {
        private readonly VaultsService _vs;

        public VaultsController(VaultsService vs)
        {
            _vs = vs;
        }

        //GETS
        [HttpGet("{id}")]
        public async Task<ActionResult<Vault>> GetById(int id)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                Vault vault = _vs.GetById(id, userInfo?.Id);
                return Ok(vault);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        //POSTS
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Vault>> Create([FromBody] Vault vaultData)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                vaultData.CreatorId = userInfo.Id;
                vaultData.Creator = userInfo;
                Vault vault = _vs.Create(vaultData);
                return Ok(vault);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        //PUTS
        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<Vault>> Edit(int id, [FromBody] Vault vaultData)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                Vault updated = _vs.Edit(id, vaultData, userInfo);
                return Ok(updated);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        //Deletes
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<String>> Delete(int id)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                _vs.Delete(id, userInfo.Id);
                return Ok("DELETED");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}