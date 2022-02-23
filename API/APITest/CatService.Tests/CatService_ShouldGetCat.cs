using NUnit.Framework;
using API.Services;
using API.Models;
using Microsoft.Extensions.Configuration;
using APITest;
using System.Threading.Tasks;

namespace API.UnitTests.Services
{
    [TestFixture]
    public class CatService_ShouldGetCat
    {
        private CatService catService;
        private Config config = new Config();
        [SetUp]
        public void Setup()
        {
            catService = new CatService(new System.Net.Http.HttpClient(), config.configuration);
        }

        [Test]
        public async Task ShouldGetCat()
        {
            var cat = await catService.GetCat();
            Assert.IsInstanceOf<Cat>(cat);
            return;
        }
    }
}