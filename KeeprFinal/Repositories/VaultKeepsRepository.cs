using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using KeeprFinal.Models;

namespace KeeprFinal.Repositories
{
    public class VaultKeepsRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal VaultKeep Create(VaultKeep vaultKeepData)
        {
            string sql = @"
           INSERT INTO vaultKeeps
           (creatorId, vaultId, keepId)
           VALUES
           (@CreatorId, @VaultId, @KeepId);
           SELECT LAST_INSERT_ID();";
            vaultKeepData.Id = _db.ExecuteScalar<int>(sql, vaultKeepData);
            return vaultKeepData;
        }

        internal List<Keep> GetKeepsByVault(int id)
        {
            string sql = @"
            SELECT
            p.*,
             vk.* 
            from vaultKeeps vk
            JOIN profiles p ON vk.creatorId = p.id
            WHERE vk.vaultId = @id;";
            return _db.Query<Profile, Keep, Keep>(sql, (profile, vaultKeep) => { vaultKeep.Creator = profile; return vaultKeep; }, new { id }).ToList();
        }
    }
}