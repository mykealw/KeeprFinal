using KeeprFinal.Models;
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

        //GETS




        //Posts
        internal Vault Create(Vault vaultData)
        {
            return _repo.Create(vaultData);
        }



        //puts



        //deletes
    }
}