using System;
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
        private VaultKeep GetById(int id)
        {
            VaultKeep found = _repo.GetById(id);
            if (found == null)
            {
                throw new Exception("VaultKeep no existy");
            }
            return found;
        }


        //POST
        internal VaultKeep Create(VaultKeep vaultKeepData, string userId)
        {
            Vault found = _vsR.GetById(vaultKeepData.VaultId);
            if (found.CreatorId != userId)
            {
                throw new Exception("not yours?? log in?? how did you get this error?");
            }
            return _repo.Create(vaultKeepData);
        }



        //PUT



        //Delete
        internal void Delete(int id, string userId)
        {
            VaultKeep found = GetById(id);
            if (found.CreatorId != userId)
            {
                throw new Exception("not yours to delete");

            }
            _repo.Delete(id);
        }

     
    }
}