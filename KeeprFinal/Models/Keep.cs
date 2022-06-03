using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeeprFinal.Models
{
    public class Keep
    {
        public int Id { get; set; }
        public string CreatorId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Img { get; set; }
        public int Views { get; set; }
        public int Kept { get; set; }
        public int Shares { get; set; }
    }
    public class VaultKeepViewModel : Keep
    {
        public int VaultKeepId { get; set; }
    }

}