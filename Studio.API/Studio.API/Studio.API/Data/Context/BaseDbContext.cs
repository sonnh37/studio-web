﻿using Microsoft.EntityFrameworkCore;

namespace Studio.API.Data.Context
{
    public abstract class BaseDbContext : DbContext
    {
        protected BaseDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public override int SaveChanges()
        {
            return SaveChangesAsync().Result;
        }
    }
}