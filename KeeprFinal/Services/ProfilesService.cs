using System;
using KeeprFinal.Models;
using KeeprFinal.Repositories;

namespace KeeprFinal.Services
{
    public class ProfilesService
    {
        private readonly ProfilesRepository _repo;

        public ProfilesService(ProfilesRepository repo)
        {
            _repo = repo;
        }

        //GETS
        internal Profile GetById(string id)
        {
            Profile found = _repo.GetById(id);
            if (found == null)
            {
                throw new Exception("bad profile id");
            }
            return found;
        }

        //posts



        //puts



        //deletes
    }
}