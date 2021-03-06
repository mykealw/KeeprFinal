using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using KeeprFinal.Models;
using KeeprFinal.Services;
using CodeWorks.Auth0Provider;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KeeprFinal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly AccountService _accountService;
        private readonly VaultsService _vs;

        public AccountController(AccountService accountService, VaultsService vs)
        {
            _accountService = accountService;
            _vs = vs;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<Account>> Get()
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                return Ok(_accountService.GetOrCreateProfile(userInfo));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("vaults")]
        public async Task<ActionResult<List<Vault>>> GetMyVaults()
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                List<Vault> vaults = _vs.GetMyVaults(userInfo.Id);
                return Ok(vaults);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut]
        [Authorize]
        public async Task<ActionResult<Account>> Edit( [FromBody] Account accountData)
        {
           try
           {
               Account UserInfo = await HttpContext.GetUserInfoAsync<Account>();
               Account updated = _accountService.Edit(accountData, UserInfo.Email);
               return Ok(updated);
           }
           catch(Exception e)
           {
               return BadRequest(e.Message);
           }
        }
    }


}