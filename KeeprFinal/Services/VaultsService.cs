using System;
using System.Collections.Generic;
using KeeprFinal.Models;
using KeeprFinal.Repositories;

namespace KeeprFinal.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _repo;
        private readonly VaultKeepsRepository _vkR;

        public VaultsService(VaultsRepository repo, VaultKeepsRepository vkR)
        {
            _repo = repo;
            _vkR = vkR;
        }

        //GETS
        public Vault GetById(int id, string userId)
        {
            Vault found = _repo.GetById(id);
            if (found == null)
            {
                throw new Exception("Vault nto found");
            }
            if (found.IsPrivate && found.CreatorId != userId)
            {
                throw new Exception("you don't have access to this vault!");
            }
            return found;
        }

        internal List<Vault> GetMyVaults(string id)
        {
            return _repo.GetMyVaults(id);
        }

        private Vault GetById(int id)
        {
            Vault found = _repo.GetById(id);
            if (found == null)
            {
                throw new Exception("Vault nto found");
            }
            return found;
        }

        // gets relationships
        internal List<VaultKeepViewModel> GetKeepsByVault(int id, string userId)
        {
            Vault found = _repo.GetById(id);
            if (found.IsPrivate == true && found.CreatorId != userId)
            {
                throw new Exception("private vault");
            }
            return _vkR.GetKeepsByVault(id);
        }

        //Posts
        internal Vault Create(Vault vaultData)
        {
            return _repo.Create(vaultData);
        }

        //puts
        internal Vault Edit(int id, Vault vaultData, Account userInfo)
        {
            Vault original = GetById(id);
            if (original.CreatorId != userInfo.Id)
            {
                throw new Exception("this isn't yours to edit!");
            }
            original.Name = vaultData.Name ?? original.Name;
            original.Description = vaultData.Description ?? original.Description;
            original.IsPrivate = vaultData.IsPrivate ? original.IsPrivate : vaultData.IsPrivate;

            _repo.Edit(original);
            return this.GetById(original.Id);
        }

        //deletes
        internal void Delete(int id, string userId)
        {
            Vault found = GetById(id);
            if (found.CreatorId != userId)
            {
                throw new Exception("not yours to delete!");
            }
            _repo.Delete(id);
        }
    }
}