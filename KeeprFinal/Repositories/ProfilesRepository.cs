using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using KeeprFinal.Models;

namespace KeeprFinal.Repositories
{
    public class ProfilesRepository
    {
        private readonly IDbConnection _db;

        public ProfilesRepository(IDbConnection db)
        {
            _db = db;
        }

        //gets
        internal Profile GetById(string id)
        {
            string sql = @"
            SELECT 
            *
            FROM profiles 
            WHERE id = @id;";
            return _db.Query<Profile>(sql, new { id }).FirstOrDefault();
        }

        //relationships
        internal List<Keep> GetProfileKeeps(string id)
        {
            string sql = @"
           SELECT
           k.*,
           p.*
           FROM keeps k
           JOIN profiles p ON p.id = k.creatorId
           WHERE k.creatorId = @id;";
            return _db.Query<Keep, Profile, Keep>(sql, (keep, p) => { keep.Creator = p; return keep; }, new { id }).ToList();
        }

        internal List<Vault> GetProfileVaults(string id)
        {
            string sql = @"
            SELECT
            v.*,
            p.*
            FROM vaults v
            JOIN profiles p ON p.id = v.creatorId
            WHERE v.creatorId = @id;";
            return _db.Query<Vault, Profile, Vault>(sql, (vault, p) => { vault.Creator = p; return vault; }, new { id }).ToList();
        }

        //posts



        //puts



        //deletes
    }
}