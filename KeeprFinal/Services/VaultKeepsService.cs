using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    }
}