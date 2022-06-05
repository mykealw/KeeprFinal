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

        //posts



        //puts



        //deletes
    }
}