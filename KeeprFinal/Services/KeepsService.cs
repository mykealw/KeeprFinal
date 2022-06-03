using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KeeprFinal.Repositories;

namespace KeeprFinal.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _repo;

        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }
    }
}