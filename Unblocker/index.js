void function() {
    if ("chrome.google.com" === location.hostname && location.pathname.startsWith("/webstore")) {
        chrome.management.getAll(extensions => {
            function handleExtension(extension) {
                chrome.webstorePrivate.getExtensionStatus(extension.id, status => {
                    if ("force_installed" === status) {
                        const action = prompt(`What do you want to do with ${extension.name}? (enable/disable)`);
                        var extensionLink = "";
                        if ("" === extension.homepageUrl) {
                            extensionLink = `<b><a title="${extension.description}">${extension.name}</a></b>`;
                        } else {
                            extensionLink = `<b><a href="${extension.homepageUrl}" title="${extension.description}">${extension.name}</a></b>`;
                        }
                        var message = "";
                        if ("disable" === action.toLowerCase()) {
                            chrome.management.setEnabled(extension.id, false);
                            message = `<p>Disabled ${extensionLink}</p>`;
                        } else if ("enable" === action.toLowerCase()) {
                            chrome.management.setEnabled(extension.id, true);
                            message = `<p>Enabled ${extensionLink}</p>`;
                        } else {
                            alert("Invalid option, try again!");
                        }
                        document.body.innerHTML = message;
                    }
                });
            }
            document.body.innerHTML = "";
            document.write(`
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?f..." rel="stylesheet">
                <style>
                    body {
                        font-family: 'Montserrat', sans-serif;
                    }
                    a {
                        text-decoration: none;
                        color: blue;
                    }
                    p {
                        margin: 0px;
                    }
                </style>
                <h1 style="text-align: center">Extension Panel</h1>
            `);
            extensions.forEach(extension => handleExtension(extension));
        });
    } else {
        alert("Run this script again but while on this page");
        location.href = "https://chrome.google.com/webstor_e_";
    }
}();
