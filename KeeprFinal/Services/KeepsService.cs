using System;
using System.Collections.Generic;
using KeeprFinal.Models;
using KeeprFinal.Repositories;

namespace KeeprFinal.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _repo;

        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }

        //Gets
        internal List<Keep> GetAll()
        {
            return _repo.GetAll();
        }

        internal Keep GetById(int id)
        {
            Keep keep = _repo.GetById(id);
            if (keep == null)
            {
                throw new Exception("bad Keep Id");
            }
            return keep;
        }
        //posts
        internal Keep Create(Keep keepData)
        {
            return _repo.Create(keepData);
        }


        //puts
        internal Keep Edit(int id, Keep keepData, Account userinfo)
        {
            Keep original = GetById(id);
            if (original.CreatorId != userinfo.Id)
            {
                throw new Exception("THIS IS NOT YOURS TO EDIT!");
            }
            original.Name = keepData.Name ?? original.Name;
            original.Description = keepData.Description ?? original.Description;
            original.Img = keepData.Img ?? original.Img;
            original.Views = keepData.Views > 0 ? keepData.Views : original.Views;
            original.Kept = keepData.Kept > 0 ? keepData.Kept : original.Kept;
            original.Shares = keepData.Shares > 0 ? keepData.Shares : original.Shares;
            _repo.Edit(original);
            return this.GetById(original.Id);
        }

       

        //delete 
        internal void Delete(int id, string userId)
        {
            Keep keep = GetById(id);
            if (keep.CreatorId != userId)
            {
                throw new Exception("NOT YOURS TO DELETE");
            }
            _repo.Delete(id);
        }
    }
}