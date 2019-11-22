
Remove-Item public\* -Recurse
git add .
git commit -m "update"
git push origin master
Copy-Item C:\Users\zhang\Documents\Control4\PublishedDrivers\ParadoxDriver.c4z  content\zh\node2\paradox-to-control4-driver\_index.files\
Copy-Item D:\Devlop\Control4\ParadoxDriver\driver.xml  content\zh\node2\paradox-to-control4-driver\_index.files\
hugo 
Remove-Item \\192.168.8.8\webroot$\help\* -Recurse
Copy-Item D:\Devlop\WebSite\senboll-support-website\public\*  \\192.168.8.8\webroot$\help\ -recurse
npm run algolia