using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using KeeprFinal.Models;

namespace KeeprFinal.Repositories
{
    public class KeepsRepository
    {
        private readonly IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        //Gets
        internal List<Keep> GetAll()
        {
            string sql = @"
            SELECT 
            p.*,
            k.*
            FROM keeps k
            JOIN profiles p ON k.creatorId = p.Id;";
            return _db.Query<Profile, Keep, Keep>(sql, (p, k) => { k.Creator = p; return k; }).ToList();
        }

        internal Keep GetById(int id)
        {
            string sql = @"
            SELECT 
            k.*,
            p.*
            from keeps k
            JOIN profiles p ON k.creatorId = p.Id
            WHERE k.id = @id;";
            return _db.Query<Keep, Profile, Keep>(sql, (keeps, profile) =>
            {
                keeps.Creator = profile;
                return keeps;
            }, new { id }).FirstOrDefault();
        }


        //posts
        internal Keep Create(Keep keepData)
        {
            string sql = @"INSERT  INTO keeps
                            (creatorId, name, description, img, views, kept, shares)
                            VALUES
                            (@CreatorId, @Name, @Description, @Img, @Views, @Kept, @Shares);
                            SELECT LAST_INSERT_ID();";
            keepData.Id = _db.ExecuteScalar<int>(sql, keepData);
            return keepData;
        }

        //puts
        internal void Edit(Keep original)
        {
            string sql = @"UPDATE keeps
                            SET 
                            name = @Name,
                            description = @Description,
                            img = @Img,
                            views = @Views,
                            kept = @Kept,
                            shares = @Shares
                            WHERE id = @Id;";
            _db.Execute(sql, original);
        }

        internal void Delete(int id)
        {
            string sql = "DELETE FROM keeps WHERE id=@id LIMIT 1;";
            _db.Execute(sql, new { id });
        }

        //deletes
    }
}