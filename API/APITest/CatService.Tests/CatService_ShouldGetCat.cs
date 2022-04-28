using NUnit.Framework;
using API.Services;
using API.Models;
using Microsoft.Extensions.Configuration;
using APITest;
using System.Threading.Tasks;
using System.Linq;

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

        [Test]
        public async Task ShouldGetCatsGivenSize()
        {
            var size = 3;
            var catList = await catService.GetCats(size);
            Assert.IsTrue(catList.Count == size);
            return;
        }

        [Test]
        public async Task ShouldUniqueGetCatsGivenSize()
        {
            var size = 10;
            var catList = await catService.GetCats(size);
            Assert.IsTrue(catList.Distinct().Count() == size);
            return;
        }
    }
}