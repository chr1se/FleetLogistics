﻿// <auto-generated />
using System;
using FLapi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FLapi.Migrations
{
    [DbContext(typeof(VehicleContext))]
    partial class VehicleContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FLapi.Models.Vehicle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BookedBy")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<DateTime>("BookingDate")
                        .HasColumnType("Date");

                    b.Property<string>("Brand")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Colour")
                        .IsRequired()
                        .HasColumnType("varchar(16)");

                    b.HasKey("Id");

                    b.ToTable("Vehicles");
                });
#pragma warning restore 612, 618
        }
    }
}
