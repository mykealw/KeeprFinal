using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KeeprFinal.Repositories;

namespace KeeprFinal.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _repo;

        public VaultsService(VaultsRepository repo)
        {
            _repo = repo;
        }
    }
}