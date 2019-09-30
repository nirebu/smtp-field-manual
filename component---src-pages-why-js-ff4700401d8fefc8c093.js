(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{604:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(598),o=a(597),s=a(613);t.default=function(){return n.a.createElement(l.a,{invertHeader:!0,hideSearch:!0},n.a.createElement(o.a,{title:"Why we built this",description:"Why we built SMTP Field Manual"}),n.a.createElement("div",{className:"container u-push-top content"},n.a.createElement("h2",{className:"u-center"},"Why we built the SMTP Field Manual"),n.a.createElement("div",{className:"divider"}),n.a.createElement("p",{className:"u-push-top"},"We've been sending email (",n.a.createElement("a",{href:"https://postmarkapp.com",target:"_blank",rel:"noopener noreferrer"},"as a provider"),") for nearly 16 years at"," ",n.a.createElement("a",{href:"https://wildbit.com",target:"_blank",rel:"noopener noreferrer"},"Wildbit"),". Arguably the most confusing aspects of email delivery is bounce management and SMTP response codes. If you're unfamiliar, ISPs (like Gmail, Office 365) will send SMTP responses back about the success or failure of the messages you send. We want to document these responses for several reasons:"),n.a.createElement("ul",{className:"columns-diamond"},n.a.createElement("li",null,"SMTP response codes vary wildly per provider. A 550 might mean something different depending on who you email."),n.a.createElement("li",null,"SMTP response codes are constantly changing. It's extremely hard to keep up with it."),n.a.createElement("li",null,"Advice on what to do with a specific response varies. Should this be a hard bounce, soft bounce, block?"),n.a.createElement("li",null,"The information that comes from SMTP codes can be very telling for deliverability, yet most providers bury the information."," "),n.a.createElement("li",null,"Even ISPs themselves don’t document all of these responses. A favorite is the"," ",n.a.createElement("a",{href:"/provider/gmail#code_550_5_7_1"},"Gmail low reputation response"),"."," ")),n.a.createElement("p",null,"With these reasons in mind, we wanted to create a single resource to document the SMTP codes that exist for the major providers. And even more important, ask for help from the industry to keep them up to date."," "),n.a.createElement("h3",{className:"response-list-header u-push-top"},"Who it’s for"),n.a.createElement("p",null,"This resource is perfect for:"),n.a.createElement("ul",{className:"columns-diamond"},n.a.createElement("li",null,"Customer Support – Make sense of that bounce message so you can tell your customer what happened, and how to fix it."),n.a.createElement("li",null,"Email Server Administrators – Follow best practices to standardize SMTP responses across ISPs."),n.a.createElement("li",null,"Email Deliverability Teams – Keep up to date on changes to SMTP responses, what they mean, and help contribute to the resource.")),n.a.createElement("p",null,"We hope this becomes a valuable resource for anyone who relies on email delivery. Please help us"," ",n.a.createElement("a",{href:"https://twitter.com/intent/tweet?url=https://smtpfieldmanual.com&text=See%20raw%20SMTP%20responses%20from%20major%20email%20providers%20and%20spam%20filter%20services.",target:"_blank",rel:"noopener noreferrer"},"spread the word")," ","to make it even more valuable."),n.a.createElement(s.a,null)))}},612:function(e){e.exports=JSON.parse('{"data":{"allContributorsJson":{"edges":[{"node":{"name":"Chris Nagele","twitter":"cnagele"}},{"node":{"name":"Ashley Harpp","twitter":"AshHarpp11"}},{"node":{"name":"Anna Grace","twitter":"howdy_anna"}},{"node":{"name":"Derek Rushforth","twitter":"diraq"}}]}}}')},613:function(e,t,a){"use strict";a(21),a(6);var r=a(612),n=a(0),l=a.n(n),o=a(41),s=a(81),i=n.forwardRef((function(e,t){return n.createElement(s.a,Object(o.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"-.125em",iconViewBox:"0 0 512 512"},e,{ref:t}),n.createElement("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",key:"k0"}))}));i.displayName="Twitter";var c=n.forwardRef((function(e,t){return n.createElement(s.a,Object(o.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),n.createElement("path",{d:"M12 10.375a4.375 4.375 0 00-8.75 0c0 1.127.159 2.784 1.75 4.375L12 20s5.409-3.659 7-5.25 1.75-3.248 1.75-4.375a4.375 4.375 0 00-8.75 0",key:"k0"}))}));c.displayName="Heart";var m=a(221);t.a=function(){var e=r.data;return e=m.flatten(e.allContributorsJson),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:"response-list-header"},"We ",l.a.createElement(c,{size:"22px"})," email"),l.a.createElement("p",null,"Thanks to all the fine folks who have contributed to the SMTP Field Manual."),l.a.createElement("ul",{className:"columns-diamond"},e.map((function(e){return l.a.createElement("li",{className:"slim",key:e.name.replace(" ","")},e.name," ",e.twitter&&l.a.createElement("a",{href:"https://twitter.com/"+e.twitter,target:"_blank",rel:"noopener noreferrer",className:"twitter-handle"},l.a.createElement(i,{size:"12"}),l.a.createElement("span",null,"@",e.twitter)))}))))}}}]);
//# sourceMappingURL=component---src-pages-why-js-ff4700401d8fefc8c093.js.map