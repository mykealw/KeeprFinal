using System;
using KeeprFinal.Models;
using KeeprFinal.Repositories;

namespace KeeprFinal.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _repo;
        private readonly VaultsRepository _vsR;
        private readonly KeepsRepository _kr;

        public VaultKeepsService(VaultKeepsRepository repo, VaultsRepository vsR, KeepsRepository kr)
        {
            _repo = repo;
            _vsR = vsR;
            _kr = kr;
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
            VaultKeep created = _repo.Create(vaultKeepData);
            Keep foundKeep = _kr.GetById(created.KeepId);
            foundKeep.Kept++;
            _kr.Edit(foundKeep);
            return created;
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
            Keep foundKeep = _kr.GetById(found.KeepId);
            foundKeep.Kept--;
            _kr.Edit(foundKeep);
            _repo.Delete(id);
        }
    }
}