using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MagazinAuto.Models
{
    public class Piesa
    {
        public int Id { get; set; }

        public string Nume { get; set; }

        public string Tip { get; set; }

        public string Pret { get; set; }

        public bool Bag { get; set; }
    }
}
