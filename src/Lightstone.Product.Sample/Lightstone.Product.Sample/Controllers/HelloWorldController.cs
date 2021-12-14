using Lightstone.Product.Sample.Models;
using LightstonePlatform.Products.Controllers;
using LightstonePlatform.Products.Models;
using Microsoft.AspNetCore.Mvc;

namespace Lightstone.Product.Sample.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HelloWorldController : ProductFlowController<HelloWorldInput>
    {
        const string INPUT_ELEMENT_NAME = "hello-world-input";
        const string FINAL_ELEMENT_NAME = "hello-world";

        public async override Task<ActionResult<StartResponse>> Start([FromBody] ProductFlowInstanceStartModel input)
        {
            return new ShowUIStartResponse
            {
                ElementName = INPUT_ELEMENT_NAME
            };
        }

        public async override Task<ActionResult<ValidateInputResponse>> ValidateInputs([FromBody] ProductFlowInstanceInput<HelloWorldInput> input)
        {
            return new ValidateInputResponse()
            {
                Succesful = true,
                ProductDesctiption = $"{input.Data.Name}"
            };
        }

        public async override Task<ActionResult<ProcessResponse>> Process([FromBody] ProductFlowInstanceProcessModel<HelloWorldInput> input)
        {
            return new ShowUIProcessResponse
            {
                Attributes = { { "name", input.Input.Data.Name } },
                ElementName = FINAL_ELEMENT_NAME
            };
        }

    }
}
