using System;
using System.Collections.Generic;
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

        //relationships
        internal List<Keep> GetProfileKeeps(string id)
        {
            Profile found = this.GetById(id);
            return _repo.GetProfileKeeps(found.Id);
        }

        internal List<Vault> GetProfileVaults(string id)
        {
            Profile found = this.GetById(id);
            return _repo.GetProfileVaults(found.Id);
        }

        //posts



        //puts



        //deletes
    }
}