using System.Data;
using System.Linq;
using Dapper;
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
        internal Vault GetById(int id)
        {
            string sql = @"
           SELECT 
           p.*,
           v.*
           FROM vaults v 
           JOIN profiles p ON v.creatorId = p.id
           WHERE v.id = @id;";
            return _db.Query<Profile, Vault, Vault>(sql, (p, v) =>
            {
                v.Creator = p;
                return v;
            }, new { id }).FirstOrDefault();
        }



        //Posts
        internal Vault Create(Vault vaultData)
        {
            string sql = @" INSERT INTO vaults
           (name, description, isPrivate, creatorId)
           VALUES
           (@Name, @Description, @IsPrivate, @CreatorId);
           SELECT LAST_INSERT_ID();";
            vaultData.Id = _db.ExecuteScalar<int>(sql, vaultData);
            return vaultData;
        }





        //Puts
        internal void Edit(Vault original)
        {
            string sql = @"
         UPDATE vaults
         SET
         name =@Name,
         description = @Description,
         isPrivate = @IsPrivate
         WHERE id = @Id;";
            _db.Execute(sql, original);
        }



        //Deletes

        internal void Delete(int id)
        {
            string sql = "DELETE FROM vaults WHERE id = @id LIMIT 1;";
            _db.Execute(sql, new { id });
        }

    }
}