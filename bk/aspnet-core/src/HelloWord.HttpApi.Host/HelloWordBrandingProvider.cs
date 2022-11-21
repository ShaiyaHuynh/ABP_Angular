using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace HelloWord;

[Dependency(ReplaceServices = true)]
public class HelloWordBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "HelloWord";
}
