<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<div id="heading">
<div id="login" <sec:authorize access="hasRole('ROLE_ADMIN')">style="visibility:hidden"</sec:authorize>>
	login to edit</div>
<div id="logout" <sec:authorize access="hasRole('ROLE_ADMIN')">style="display:block"</sec:authorize> style="display:none">logout</div>
<div class="sim-logo"></div> </div>
 <h1>Systems In Motion Organization Chart</h1>