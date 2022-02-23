using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace APITest
{
    class Config
    {
        public IConfiguration configuration;
        public Config()
        {
            var myConfiguration = new Dictionary<string, string>
            {
                        { "CatUrl", "https://cataas.com/" }
            };

            var config = new ConfigurationBuilder()
                .AddInMemoryCollection(myConfiguration)
                .Build();
            configuration = config;
        }
    }
}
