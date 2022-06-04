using System.Collections.Generic;
using KeeprFinal.Models;
using KeeprFinal.Repositories;

namespace KeeprFinal.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _repo;

        public VaultKeepsService(VaultKeepsRepository repo)
        {
            _repo = repo;
        }
        //GET
        internal List<Keep> GetKeepsByVault(int id)
        {
            return _repo.GetKeepsByVault(id);
        }


        //POST
        internal VaultKeep Create(VaultKeep vaultKeepData)
        {
            return _repo.Create(vaultKeepData);
        }




        //PUT



        //Delete
    }
}