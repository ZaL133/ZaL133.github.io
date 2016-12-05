**I can't seem to get XrmToolbox to connect to Dynamics 2016 which is configured for claims based authentication.** 

## Research

XrmToolbox uses the MscrmTools.Xrm.Connection 

MscrmTools.Xrm.Connection uses CrmServiceClient
	https://github.com/MscrmTools/MscrmTools.Xrm.Connection/blob/master/McTools.Xrm.Connection/ConnectionDetail.cs

I can't get a simple app using CrmServiceClient to log in to Crm 2016 IFD

<pre><code>    class Program
    {
        private static readonly CrmServiceClient _crmClient = new Microsoft.Xrm.Tooling.Connector.CrmServiceClient(ConfigurationManager.AppSettings["CrmConnectionString"]);
        private static readonly IOrganizationService _service = _crmClient.OrganizationWebProxyClient ?? (IOrganizationService)_crmClient.OrganizationServiceProxy;

        static void Main(string[] args)
        {
            using (var ctx = new organizationcontext(_service))
            {
                foreach (var account in ctx.AccountSet.Where(x => x.Name.StartsWith("Al")))
                {
                    Console.WriteLine("Name: {0}", account.Name);
                }
            }

            Console.WriteLine("Done!\nPress any key to continue...");
            Console.ReadKey();
        }
    }</code></pre>

Looking through the crm sdk sample code, I put together a simple connection using their methods. This DOES work 

<pre><code>        static void Main(string[] args)
        {
            var organizatonUri = new Uri("https://crmdev.organization.com/orgname/XRMServices/2011/Organization.svc");
            AuthenticationCredentials credentials = new AuthenticationCredentials();
            credentials.ClientCredentials.UserName.UserName = "username";
            credentials.ClientCredentials.UserName.Password = "password";

            var serviceManagement = ServiceConfigurationFactory.CreateManagement<IOrganizationService>(organizatonUri);
            AuthenticationCredentials token = serviceManagement.Authenticate(credentials);

            var organizationServiceProxy = new OrganizationServiceProxy(serviceManagement, token.SecurityTokenResponse);
            organizationServiceProxy.EnableProxyTypes();
            
            using (var ctx = new organizationcontext(organizationServiceProxy))
            {
                foreach (var account in ctx.AccountSet.Where(x => x.Name.StartsWith("Al")))
                {
                    Console.WriteLine("Name: {0}", account.Name);
                }
            }

            Console.WriteLine("Done!\nPress any key to continue...");
            Console.ReadKey();
        }</code></pre>
        
        