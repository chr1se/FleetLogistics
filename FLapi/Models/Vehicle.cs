using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FLapi.Models
{
    public class Vehicle
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Brand { get; set; }

        [Required]
        [Column(TypeName = "varchar(16)")]
        public string Colour { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string BookedBy { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        public DateTime BookingDate { get; set; }
    }
}
