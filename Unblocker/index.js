javascript:void function(){"chrome.google.com"===location.hostname&&location.pathname.startsWith("/webstore")?chrome.management.getAll(a=>{function b(a){chrome.webstorePrivate.getExtensionStatus(a.id,b=>{if("force_installed"===b){const b=prompt(`What do you want to do with ${a.name}? (enable/disable)`);var c=""===a.homepageUrl?`<b><a title="${a.description}">${a.name}</a></b>`:`<b><a href="${a.homepageUrl}" title="${a.description}">${a.name}</a></b>`,d="";"disable"===b.toLowerCase()?(chrome.management.setEnabled(a.id,!1),d =`<p>Disabled ${c}</p>`):"enable"===b.toLowerCase()?(chrome.management.setEnabled(a.id,!0),d =`<p>Enabled ${c}</p>`):alert("Invalid option, try again!"),document.body.innerHTML =d}})}document.body.innerHTML="",document.write("\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?f...\" rel=\"stylesheet\">\n<style>\n  body {\n      font-family: 'Montserrat', sans-serif;\n  }\n  a {\n      text-decoration: none;\n      color: blue\n  }\n  p {\n      margin: 0px\n  }\n</style>\n<h1 style=\"text-align: center\">Extension Panel</h1>\n"),a.forEach(a=>b(a))}):(alert("Run this script again but while on this page"),location.href="https://chrome.google.com/webstor_e_")}();