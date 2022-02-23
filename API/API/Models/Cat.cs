using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Cat
    {
        public string url { get; set; }
        public string id { get; set; }
        public List<string> tags { get; set; }
        public DateTime created_at { get; set; } 
    }
}
