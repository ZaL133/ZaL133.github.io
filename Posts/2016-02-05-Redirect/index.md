# Redirect 

I can never remember which method to return for an MVC redirect.

* <a href="#redirect">Redirect</a>
* <a href="#redirectPerm">RedirectPermanent</a>
* <a href="#redirectAction">RedirectToAction, RedirectToActionPermanent</a>
* <a href="#redirectRoute">RedirectToRoute, RedirectToRoutePermanent</a>
* <a href="#transfer">Transfer, TransferRequest</a><


The main differences between the base and the *Permantent are the <code>Redirect</code> will return a <a href="https://en.wikipedia.org/wiki/HTTP_302">302 (found)</a>, while the <code>RedirectPermanent</code> will return a <a href="https://en.wikipedia.org/wiki/HTTP_301">301 (Moved Permantently) </a>

## Redirect <a name="redirect"></a> 

Returns a 302 (Found) to the given url

<img src="RedirMethod.png" alt="Redirect Method" />

<img src="RedirHeaders.png" alt="Redirect Headers" />


## Redirect Permanent <a name="redirectPerm"></a>

Returns a 301 (Moved Permanently) to the given url

<img src="RedirPermMethod.png" alt="Redirect Permanent Method" />

<img src="RedirPermHeaders.png" alt="Redirect Permanent Headers" />

## RedirectToAction, RedirectToActionPermanent <a name="redirectAction"></a>
These work the same as the Redirect(Permanent) methods, but are formed MVC-ish in that you specify the action, controller, and model as you would using the <code>@Url.Action</code> helper method or <code>@Html.ActionLink</code>

<img src="RedirActionMethod.png" alt="Redirect Permanent Method" />

<img src="RedirActionHeaders.png" alt="Redirect Permanent Headers" />

## RedirectToRoute, RedirectToRoutePermanent <a name="redirectRoute"></a>

These methods allow you to specify the route name (as specified in your RouteConfig.cs and stored in your <a href="https://msdn.microsoft.com/en-us/library/system.web.routing.routetable.routes.aspx">RouteTable</a> ) & values rather than the Action/Controller values.
 
<img src="RedirRouteMethod.png" alt="Redirect Permanent Method" />

<img src="RedirRouteHeaders.png" alt="Redirect Permanent Headers" />

## Transfer, TransferRequest <a name="transfer"></a>

These can be used to execute a different url and return the results

<code>Transfer</code> is used in < IIS7<br>
<code>TransferRequest</code> is used in <a href="http://www.iis.net/learn/application-frameworks/building-and-running-aspnet-applications/how-to-take-advantage-of-the-iis-integrated-pipeline">Integrated Pipeline Mode</a>
    
<img src="TransferRequestMethod.png" alt="Transfer Request Method" />

<img src="TransferRequestHeaders.png" alt="Transfer Request Headers" />
