Copy-Item C:\Users\zhang\Documents\Control4\PublishedDrivers\ParadoxDriver.c4z  D:\Devlop\WebSite\hugo-create-website\content\node2\paradox-to-control4-driver\_index.files\
Copy-Item D:\Devlop\Control4\ParadoxDriver\driver.xml  D:\Devlop\WebSite\hugo-create-website\content\node2\paradox-to-control4-driver\_index.files\
hugo 
Remove-Item \\192.168.8.4\webroot\help\* -Recurse
Copy-Item D:\Devlop\WebSite\hugo-create-website\public\*  \\192.168.8.4\webroot\help\ -recurse
