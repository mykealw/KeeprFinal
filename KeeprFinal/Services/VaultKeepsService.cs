using System;
using System.Collections.Generic;
using KeeprFinal.Models;
using KeeprFinal.Repositories;

namespace KeeprFinal.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _repo;
        private readonly VaultsRepository _vsR;

        public VaultKeepsService(VaultKeepsRepository repo, VaultsRepository vsR)
        {
            _repo = repo;
            _vsR = vsR;
        }




        //GET
        // internal List<Keep> GetKeepsByVault(int id, string userId)
        // {
        //     Vault found = _vsR.GetById(id);
        //     if (found.IsPrivate == true && found.CreatorId!= userId)
        //     {
        //         throw new Exception("private vault");
        //     }
        //     return _repo.GetKeepsByVault(id);
        // }


        //POST
        internal VaultKeep Create(VaultKeep vaultKeepData)
        {
            return _repo.Create(vaultKeepData);
        }




        //PUT



        //Delete
    }
}