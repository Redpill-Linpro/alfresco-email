(function() {
  YAHOO.Bubbling.fire("registerAction", {
      actionName: "onActionMultiEmail",
      fn: function multiEmail(record, owner)
      {
        var payload = [];
        if(Array.isArray(record)){
          for(var i = 0; i < record.length; i++){
           payload[i] = {
             nodeRef: record[i].nodeRef,
             fileName: record[i].fileName
           };
          }
        }
        else{
         payload =[{
                 nodeRef: record.nodeRef,
                 fileName: record.fileName
               }];
        }
        var body = "";
        var subject = "";
        var currentBrowserBaseUrl = window.location.protocol + "//" +window.location.host;
        for (var i = 0; i< payload.length; i++) {
          if (body.length > 0) {
            body += " \n"
            subject += ", "
          }
          body += payload[i].fileName + " - " + Alfresco.util.combinePaths(currentBrowserBaseUrl, Alfresco.util.siteURL("document-details?nodeRef=" + payload[i].nodeRef));
          subject += payload[i].fileName;
        }

        var currentMailToLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body)
        window.open(currentMailToLink);
      }

    });



})();


