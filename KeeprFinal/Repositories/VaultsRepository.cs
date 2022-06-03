using System;
using System.Data;
using KeeprFinal.Models;

namespace KeeprFinal.Repositories
{
    public class VaultsRepository
    {
        private readonly IDbConnection _db;

        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }

        //GETS




        //Posts
        internal Vault Create(Vault vaultData)
        {
           string sql = @" INSERT INTO vaults
           ("
        }


        //Puts




        //Deletes
    }
}