Alfresco Email Components
=============================================

This module is sponsored by Redpill Linpro AB - http://www.redpill-linpro.com.

Description
-----------
This project contains various customizations that relate to Alfrescos emailing functionality.

Structure
------------

The project consists of several maven modules packaged as jar files. Each module may contain several alfresco components.

 * Alfresco Share Actions - Contains Mailto actions for various functions. Each function is packaged as a Share module activated by the module deployment page.
 * ...

Building & Installation
------------
The build produces several jar files. Attach them to your own maven project using dependencies or put them under tomcat/shared/lib.

Repository dependency:
```
TBD
```

Share dependency:
```xml
<dependency>
  <groupId>org.redpill-linpro.alfresco.email</groupId>
  <artifactId>alfresco-email-share-actions</artifactId>
  <version>1.1.0</version>
</dependency>
```

Maven repository:
```xml
<repository>
  <id>redpill-public</id>
  <url>http://maven.redpill-linpro.com/nexus/content/groups/public</url>
</repository>
```

The jar files are also downloadable from: https://maven.redpill-linpro.com/nexus/index.html#nexus-search;quick~alfresco-email


License
-------

This application is licensed under the LGPLv3 License. See the [LICENSE file](LICENSE) for details.

Authors
-------

Marcus Svartmark - Redpill Linpro AB
