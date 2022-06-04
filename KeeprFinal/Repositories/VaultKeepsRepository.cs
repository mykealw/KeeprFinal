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
        //GET
        internal VaultKeep GetById(int id)
        {
            string sql = @"
            SELECT 
            p.*,
            vk.*
            FROM vaultKeeps vk
            JOIN profiles p ON vk.creatorId = p.id
            WHERE vk.id = @id;";
            return _db.Query<Profile, VaultKeep, VaultKeep>(sql, (p, vk) => { vk.CreatorId = p.Id; return vk; }, new { id }).FirstOrDefault();
        }

        internal List<VaultKeepViewModel> GetKeepsByVault(int id)
        {
            string sql = @"
            SELECT
            k.*,
             vk.id AS VaultKeepId, 
            p.*
            FROM vaultKeeps vk
            JOIN keeps k ON k.id = vk.keepId
            JOIN profiles p ON p.id = k.creatorId
            WHERE vk.vaultId = @id;";
            return _db.Query<VaultKeepViewModel, Profile, VaultKeepViewModel>(sql, (VaultKeep, profile) => { VaultKeep.Creator = profile; return VaultKeep; }, new { id }).ToList();
        }



        //posts
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

        //puts



        //deletes
        internal void Delete(int id)
        {
            string sql = "DELETE FROM vaultKeeps WHERE id = @id LIMIT 1;";
            _db.Execute(sql, new { id });
        }




    }
}